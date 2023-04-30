import { Identifier, Integer, MetaActionType, } from "../mod";


type ItemActionTypeList = {
    type: "origins:consume";
    amount?: Integer;
} | {
    type: "origins:damage";
    amount?: Integer;
    ignore_unbreaking?: boolean;
} | {
    type: "origins:merge_nbt";
    nbt: string;
} | {
    type?: "origins:modify";
    modifier: Identifier;
} | {
    enchantment?: Identifier;
    enchantments?: Identifier[];
    levels?: Integer;
    reset_repair_cost?: boolean;
};

export type ItemActionType = MetaActionType<ItemActionTypeList>;