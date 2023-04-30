export * from "./types/mod";

import { Origin, OriginLayer, Power, Meta, Identifier } from "./lib";
import fs from "fs";
import { zip } from "zip-a-folder";
import beautify from "json-beautify";


/**
 * @todo: Clean up this class
 */
export class App {
    constructor(
        public meta: Meta,
        public mainDir = "./app",
    ) {
        this.writeFile(
            `${mainDir}/${meta.name}/pack.mcmeta`,
            { pack: meta }
        );
    }

    private writeFile(file: string, data: object) {
        return fs.writeFileSync(file, beautify(data, null, 4, 32));
    }


    public addPower(id: Identifier, power: Power) {
        this.writeFile(
            `${this.mainDir}/${this.meta.name}/data/${this.meta.id}/powers/${id}.json`,
            power.type === "origins:multiple"
                ? { ...(power as any).powers, ...power, ...{powers: null} } // typescript confused?
                : power
        );
    }
    public addPowers(powers: Record<Identifier, Power>) {
        for (const [id, power] of Object.entries(powers)) {
            this.addPower(id as Identifier, power);
        }
    }

    public addOrigin(id: Identifier, origin: Origin) {
        this.writeFile(
            `${this.mainDir}/${this.meta.name}/data/${this.meta.id}/origins/${id}.json`,
            {
                ...origin,
                powers: Object.keys(origin.powers).map(p => `${this.meta.id}:${p}`),
            }
        );
    }
    public addOrigins(origins: Record<Identifier, Origin>) {
        for (const [id, origin] of Object.entries(origins)) {
            this.addOrigin(id as Identifier, origin);
        }
    }

    public addLayer(id: Identifier, layer: OriginLayer) {
        this.writeFile(
            `${this.mainDir}/${this.meta.name}/data/origins/origin_layers/${id}.json`,
            {
                ...layer,
                powers: Object.keys(layer.origins).map(o => `${this.meta.id}:${o}`),
            }
        );
    }

    public addLayers(layers: Record<Identifier, OriginLayer>) {
        for (const [id, layer] of Object.entries(layers)) {
            this.addLayer(id as Identifier, layer);
        }
    }

    public save() {
        zip(`${this.mainDir}/${this.meta.name}`, `${this.mainDir}/${this.meta.name}.zip`);
    }
}
