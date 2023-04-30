import { Framework } from "./lib";
import * as origins from "./origins";
import * as powers from "./powers/mod";
enum Element {
    
}

const elements = new Framework({
    name: "Elements",
    id: "elements",
    pack_format: 10,
    description: "",
});

/**
 * Typescript doesn't help much here.
 * `Record<string, T>` might be too loose.
 * 
 * Wish this line was cleaner too.
 * 
 * @todo: add test cases
 */
elements.addPowers(Object.values(powers).reduce((p, c) => ({ ...c, ...p}), {}));

elements.addOrigins(Object.values(origins).reduce((p, c) => ({ ...c, ...p }), {}));

elements.addLayer("passives", {
    origins: origins.passiveOrigins,
});
elements.addLayer("bursts", {
    origins: origins.burstOrigins,
});
elements.addLayer("skills", {
    origins: origins.skillOrigins,
});

elements.save();
