import { Comparison, Identifier, Integer, Ingredient, Float, MetaConditionType } from "../mod";

type ItemConditionTypeList = {
    type: "origins:amount";
    comparison: Comparison;
    compare_to: Integer;
} | {
    type: "origins:armor_value";
    comparison: Comparison;
    compare_to: Integer;
} | {
    type: "origins:durability";
    comparison: Comparison;
    compare_to: Integer;
} | {
    type: "origins:empty";
} | {
    type: "origins:enchantment";
    enchantment: Identifier;
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:fireproof";
} | {
    type: "origins:food";
} | {
    type: "origins:harvest_level";
    comparison: Comparison;
    compare_to: Integer;
} | {
    type: "origins:ingredient";
    ingredient: Ingredient;
} | {
    type: "origins:is_damageable";
} | {
    type: "origins:is_equippable";
} | {
    type: "origins:meat";
} | {
    type: "origins:nbt";
    nbt: string;
} | {
    type: "origins:relative_durability";
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:smeltable";
};

export type ItemConditionType = MetaConditionType<ItemConditionTypeList>;