import { BientityConditionType, EntityConditionType, BlockConditionType, ItemConditionType, BiomeConditionType, DamageConditionType } from "../mod";

export type MetaConditionType<T extends
    | BientityConditionType
    | EntityConditionType
    | BlockConditionType
    | ItemConditionType
    | BiomeConditionType
    | DamageConditionType
> = {
    inverted?: boolean;
} & ({
    type: "origins:and";
    actions: MetaConditionType<T>[];
} | {
    type: "origins:constant";
    value: boolean;
} | {
    type: "origins:or";
    conditions: MetaConditionType<T>[];
} | T);
