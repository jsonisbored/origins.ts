import { Origins } from "./lib";
import * as passives from "./powers/passives/mod";
import * as bursts from "./powers/bursts/mod";
import * as skills from "./powers/skills/mod";


type Key = string|number|symbol;
/**
 * This is basically the same as map for an array but takes the object as the first parameter.
 * As far as I know, this seemed like the cleanest solution sadly.
 */
function objectMap<T, U>(obj: Record<Key, T>, callbackfn: (value: T, key: Key, index: number) => U, thisArg?: any) {
    return Object.fromEntries(Object.entries(obj).map(([key, value], index) => [key, callbackfn(value, key, index)]));
}


export const passiveOrigins: Origins = objectMap(passives, p => ({ powers: p }));

export const burstOrigins: Origins = objectMap(bursts, p => ({ powers: p }));

export const skillOrigins: Origins = objectMap(skills, p => ({ powers: p }));
