import { BlockConditionType, DestructionType, Float, Identifier, Integer, MetaActionType } from "../mod";


type BlockActionTypeList = {
    type: "origins:add_block";
    add_block: Identifier;
} | {
    type: "origins:bonemeal";
    effects: boolean;
} | {
    type: "origins:execute_command";
    command: string;
} | {
    type: "origins:explode";
    power: Float;
    descruction_type?: DestructionType;
    indescructible?: BlockConditionType;
    descructible?: BlockConditionType;
    create_fire?: boolean;
} | {
    type: "origins:modify_block_state";
    property: string;
    operation?: string;
    change?: Integer;
    value?: boolean;
    enum?: string;
    cycle?: boolean;
} | {
    type: "origins:set_block";
    block: Identifier;
} | {
    type: "origins:offset";
    action: BlockActionType;
    x?: Integer;
    y?: Integer;
    z?: Integer;
};

export type BlockActionType = MetaActionType<BlockActionTypeList>;