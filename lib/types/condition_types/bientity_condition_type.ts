import { Comparison, EntityConditionType, Float, ShapeType, FluidHandling, MetaConditionType } from "../mod";


type BientityConditionTypeList = {
    type: "origins:attack_target";
} | {
    type: "origins:attacker";
} | {
    type: "origins:can_see";
    shape_type?: ShapeType;
    fluid_handling?: FluidHandling;
} | {
    type: "origins:distance";
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:owner";
} | {
    type: "origins:relative_rotation";
    axes?: Array<"x"|"y"|"z">;
    actor_rotation?: string;
    target_rotation?: string;
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:riding_recursive";
} | {
    type: "origins:riding_root";
} | {
    type: "origins:riding";
} | {
    type: "origins:actor_condition";
    condition: EntityConditionType;
} | {
    type: "origins:both";
    condition: EntityConditionType;
} | {
    type: "origins:either";
    condition: EntityConditionType;
} | {
    type: "origins:invert";
    condition: BientityConditionType;
} | {
    type: "origins:target_condition";
    condition: EntityConditionType;
} | {
    type: "origins:undirected";
    condition: BientityConditionType;
};

export type BientityConditionType = MetaConditionType<BientityConditionTypeList>;