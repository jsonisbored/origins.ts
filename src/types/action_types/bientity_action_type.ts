import { DamageSource, EntityActionType, Float, MetaActionType } from "../mod";


type BientityActionTypeList = {
    type: "origins:add_velocity";
    x?: Float;
    y?: Float;
    z?: Float;
    client?: boolean;
    set?: boolean;
} | {
    type: "origins:damage";
    amount: Float;
    source: DamageSource;
} | {
    type: "origins:mount";
} | {
    type: "origins:set_in_love";
} | {
    type: "origins:tame";
} | {
    type: "origins:actor_action";
    action: EntityActionType;
};

export type BientityActionType = MetaActionType<BientityActionTypeList>;