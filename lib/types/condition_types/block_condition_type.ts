import { Comparison, Identifier, Integer, Float, Vector, FluidConditionType, MetaConditionType } from "../mod";


type BlockConditionTypeList = {
    type: "origins:ability";
    adjacent_condition: BlockConditionType;
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:attachable";
} | {
    type: "origins:blast_resistance";
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:block_state";
    property: string;
    comparison?: Comparison;
    compare_to?: Float;
    value?: boolean;
    enum?: string;
} | {
    type: "origins:block";
    block: Identifier;
} | {
    type: "origins:distance_from_coordinates";
    reference?: string;
    offset?: Vector;
    ignore_x?: boolean;
    ignore_y?: boolean;
    ignore_z?: boolean;
    shape?: string;
    scale_reference_to_dimension?: boolean;
    result_on_the_wrong_dimension?: boolean;
    round_to_digit?: Integer;
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:exposed_to_sky";
} | {
    type: "origins:fluid";
    fuild_condition: FluidConditionType;
} | {
    type: "origins:hardness";
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:height";
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:in_tag";
    tag: Identifier;
} | {
    type: "origins:light_blocking";
} | {
    type: "origins:light_level";
    light_type?: string;
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:material";
    material?: string;
    materials?: string[];
} | {
    type: "origins:movement_blocking";
} | {
    type: "origins:nbt";
    nbt: string;
} | {
    type: "origins:replacable";
} | {
    type: "origins:slipperiness";
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:water_loggable";
} | {
    type: "origins:offset";
    condition: BlockConditionType;
    x?: 0;
    y?: 0;
    z?: 0;
};

export type BlockConditionType = MetaConditionType<BlockConditionTypeList>;