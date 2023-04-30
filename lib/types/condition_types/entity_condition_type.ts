import {
    Comparison, Float, Identifier, Integer,
    Vector, EquipmentSlot, ShapeType, FluidHandling,
    ItemConditionType, BiomeConditionType,
    BlockConditionType, BientityConditionType, MetaConditionType,
} from "../mod";


type EntityConditionTypeList = {
    type: "origins:ability";
    ability: string;
} | {
    type: "origins:advancements";
    advancement: Identifier;
} | {
    type: "origins:air";
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:attribute";
    attribute: Identifier;
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:biome";
    biome: Identifier;
    biomes: Identifier[];
    condition: BiomeConditionType;
} | {
    type: "origins:block_collision";
    offset_x: Float;
    offset_y: Float;
    offset_z: Float;
} | {
    type: "origins:block_in_radius";
    block_condition: BlockConditionType;
    radius: Integer;
    shape: string;
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:brightness";
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:climbing";
} | {
    type: "origins:collided_horizontally";
} | {
    type: "origins:command";
    command: string;
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:creative_flying";
} | {
    type: "origins:daytime";
} | {
    type: "origins:dimension";
    dimension: string;
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
    type: "origins:elytra_flight_possible";
    check_state?: boolean;
    check_abilites?: boolean;
} | {
    type: "origins:enchantment";
    enchantment: Identifier;
    calculation?: string;
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:entity_group";
    group: string;
} | {
    type: "origins:entity_type";
    entity_type: Identifier;
} | {
    type: "origins:equipped_item";
    equipment_slot: EquipmentSlot;
    item_condition: ItemConditionType;
} | {
    type: "origins:exists";
} | {
    type: "origins:exposed_to_sky";
} | {
    type: "origins:exposed_to_sun";
} | {
    type: "origins:fall_flying";
} | {
    type: "origins:fluid_height";
    fluid: Identifier;
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:food_level";
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:gamemode";
    gamemode: string;
} | {
    type: "origins:health";
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:in_block_anywhere";
    block_condition: BlockConditionType;
    comparison?: Comparison;
    compare_to?: Integer;
} | {
    type: "origins:in_block";
    block_condition: BlockConditionType;
} | {
    type: "origins:in_rain";
} | {
    type: "origins:in_tag";
    tag: Identifier;
} | {
    type: "origins:invisible";
} | {
    type: "origins:living";
} | {
    type: "origins:moving";
} | {
    type: "origins:nbt";
    nbt: string;
} | {
    type: "origins:on_block";
    block_condition: BlockConditionType;
} | {
    type: "origins:on_fire";
} | {
    type: "origins:origin";
    origin: Identifier;
    later?: Identifier;
} | {
    type: "origins:passenger_recursive";
    bientity_condition?: BiomeConditionType;
    comparison?: Comparison;
    compare_to?: Integer;
} | {
    type: "origins:passenger";
    bientity_condition?: BiomeConditionType;
    comparison?: Comparison;
    compare_to?: Integer;
} | {
    type: "origins:power_active";
    power: Identifier;
} | {
    type: "origins:power_type";
    power: Identifier;
} | {
    type: "origins:power";
    power: Identifier;
    source?: Identifier;
} | {
    type: "origins:predicate";
    predicate: Identifier;
} | {
    type: "origins:raycast";
    distance: Float;
    block?: boolean;
    entity?: boolean;
    shape_type?: ShapeType;
    fluid_handling?: FluidHandling;
    match_bientity_condition?: BiomeConditionType;
    hit_bientity_condition?: BientityConditionType;
    block_condition?: BlockConditionType;
} | {
    type: "origins:relative_health";
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:resource";
    resource: Identifier;
    comparison: Comparison;
    compare_to: Integer;
} | {
    type: "origins:riding_recursive";
    bientity_condition?: BientityConditionType;
    comparison?: Comparison;
    compare_to?: Integer;
} | {
    type: "origins:riding_root";
    bientity_condition?: BientityConditionType;
} | {
    type: "origins:riding";
    bientity_condition?: BientityConditionType;
} | {
    type: "origins:saturation_level";
    comparison: Comparison;
    compare_to: Float;
} | {
    type: "origins:scoreboard";
    name?: string;
    objective: string;
    comparison: Comparison;
    compare_to: Integer;
} | {
    type: "origins:sneaking";
} | {
    type: "origins:sprinting";
} | {
    type: "origins:status_effect";
    effect: Identifier;
    min_amplifier?: Integer;
    max_amplifier?: Integer;
    min_duration?: Integer;
    max_dutation?: Integer;
} | {
    type: "origins:submerged_in";
    fluid: Identifier;
} | {
    type: "origins:swimming";
} | {
    type: "origins:tamed";
} | {
    type: "origins:time_of_day";
    comparison: Comparison;
    compare_to: Integer;
} | {
    type: "origins:using_effective_tool";
} | {
    type: "origins:using_item";
    item_condition?: ItemConditionType;
} | {
    type: "origins:xp_levels";
    comparison: Comparison;
    compare_to: Integer;
} | {
    type: "origins:xp_points";
    comparison: Comparison;
    compare_to: Integer;
};


export type EntityConditionType = MetaConditionType<EntityConditionTypeList>;
