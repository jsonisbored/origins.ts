import { Identifier, Comparison, Float, MetaConditionType } from "../mod";


type BiomeConditionTypeList = {
    inverted?: boolean;
    type: "origins:high_humidity";
} | {
    inverted?: boolean;
    type: "origins:in_tag";
    tag: Identifier;
} | {
    inverted?: boolean;
    type: "origins:precipitation";
    precipitation: string;
} | {
    inverted?: boolean;
    type: "origins:temperature";
    comparison: Comparison;
    compare_to: Float;
};

export type BiomeConditionType = MetaConditionType<BiomeConditionTypeList>;