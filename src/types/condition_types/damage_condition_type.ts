import { Comparison, EntityConditionType, Float, MetaConditionType } from "../mod";

type DamageConditionTypeList = {
    type: "origins:amount";
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:attacker";
    entity_condition?: EntityConditionType;
} | {
    type: "origins:bypasses_armor";
} | {
    type: "origins:explosive";
} | {
    type: "origins:fire";
} | {
    type: "origins:from_falling";
} | {
    type: "origins:name";
    name: string;
} | {
    type: "origins:out_of_world";
} | {
    type: "origins:projectile";
} | {
    type: "origins:unblockable";
};

export type DamageConditionType = MetaConditionType<DamageConditionTypeList>;