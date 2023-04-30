import {
    BientityActionType, BlockActionType, EntityActionType, ItemActionType, 
    BientityConditionType, BlockConditionType, EntityConditionType, ItemConditionType,
    Float, Integer,
} from "../mod";


export type MetaActionType<T extends BientityActionType|EntityActionType|BlockActionType|ItemActionType> = {
    inverted?: boolean;
} & ({
    type: "origins:and";
    actions: MetaActionType<T>[];
} | {
    type: "origins:chance";
    action: MetaActionType<T>;
    chance: Float;
    fail_action?: MetaActionType<T>;
} | {
    type: "origins:choice";
    actions: {
        element: MetaActionType<T>;
        weight: Integer;
    }[];
} | {
    type: "origins:delay";
    action: MetaActionType<T>;
    ticks: Integer;
} | {
    type: "origins:if_else_list";
    actions: Array<{
        action: MetaActionType<T>;
        condition:
            T extends BientityActionType ? BientityConditionType :
            T extends EntityActionType ? EntityConditionType :
            T extends BlockActionType ? BlockConditionType :
            T extends ItemActionType ? ItemConditionType :
                never;
    }>;
} | {
    type: "origins:if_else";
    condition:
        T extends BientityActionType ? BientityConditionType :
        T extends EntityActionType ? EntityConditionType :
        T extends BlockActionType ? BlockConditionType :
        T extends ItemActionType ? ItemConditionType :
            never;
    if_action: MetaActionType<T>;
    else_action: MetaActionType<T>;
} | {
    type: "origins:nothing";
} | {
    side: "origins:side";
    action: MetaActionType<T>;
} | T);
