import {
    EntityConditionType, ItemConditionType, BientityConditionType,
    BlockConditionType, BientityActionType, ItemActionType,
    BlockActionType, EntityActionType, DamageConditionType,
    Float, Identifier, Integer, ItemStack, ActionResult,
    HudRender, AttributedAttributeModifier, Key, DamageSource,
    ContainerType, AttributeModifier, FluidConditionType,
    ParticleEffect, FeatureRenderer, CraftingRecipe,
    StatusEffectInstance, PositionedItemStack, TextComponent, MetaConditionType,
} from "./mod";


/**
 * Something to note: `origins:multiple` uses a `powers` property because of typescript limitations.
 * 
 * Refer to the docs for the JSON representation.
 * https://origins.readthedocs.io/en/latest/types/power_types/multiple/
 */
type PowerTypeList = | {
    type: "origins:action_on_being_used";
    bientity_action?: BientityActionType;
    held_item_action?: ItemActionType;
    result_item_action?: ItemActionType;
    bientity_condition?: BientityConditionType;
    item_condition?: ItemConditionType;
    hands?: string[];
    result_stack?: ItemStack;
    action_result?: ActionResult;
    priority?: Integer;
} | {
    type: "origins:action_on_block_break";
    entity_action?: EntityActionType;
    block_action?: BlockActionType;
    block_condition?: BlockConditionType;
    only_when_harvested?: Boolean;
} | {
    type: "origins:action_on_block_use";
    entity_action?: EntityActionType;
    block_action?: BlockActionType;
    block_condition?: BlockConditionType;
    item_condition?: ItemConditionType;
    hands?: string[];
    result_stack?: ItemStack;
    held_item_action?: ItemActionType;
    result_item_action?: ItemActionType;
    action_result?: ActionResult;
} | {
    type: "origins:action_on_callback";
    entity_action_chosen?: EntityActionType;
    execute_chosen_when_orb?: Boolean;
    entity_action_gained?: EntityActionType;
    entity_action_lost?: EntityActionType;
    entity_action_added?: EntityActionType;
    entity_action_removed?: EntityActionType;
    entity_action_respawned?: EntityActionType;
} | {
    type: "origins:action_on_entity_use";
    bientity_action?: BientityActionType;
    held_item_action?: ItemActionType;
    result_item_action?: ItemActionType;
    bientity_condition?: BientityConditionType;
    item_condition?: ItemConditionType;
    hands?: string[];
    result_stack?: ItemStack;
    action_result?: ActionResult;
    priority?: Integer;
} | {
    type: "origins:action_on_hit";
    bientity_action: BientityActionType;
    bientity_condition?: BientityConditionType;
    damage_condition?: DamageConditionType;
    cooldown?: Integer;
    hud_render?: HudRender;
} | {
    type: "origins:action_on_item_use";
    entity_action?: EntityActionType;
    item_action?: ItemActionType;
    item_condition?: ItemConditionType;
} | {
    type: "origins:action_on_land";
    entity_action: EntityActionType;
} | {
    type: "origins:action_on_wake_up";
    entity_action?: EntityActionType;
    block_action?: BlockActionType;
    block_condition?: BlockConditionType;
} | {
    type: "origins:action_over_time";
    interval?: Integer;
    entity_action?: EntityActionType;
    rising_action?: EntityActionType;
    falling_action?: EntityActionType;
} | {
    type: "origins:action_when_damage_taken";
    entity_action: EntityActionType;
    damage_condition?: DamageConditionType;
    cooldown: Integer;
    hud_render?: HudRender;
} | {
    type: "origins:action_when_hit";
    bientity_action: BientityActionType;
    bientity_condition?: BientityConditionType;
    damage_condition?: DamageConditionType;
    cooldown?: Integer;
    hud_render?: HudRender;
} | {
    type: "origins:active_self";
    entity_action: EntityActionType;
    cooldown?: Integer;
    hud_render?: HudRender;
    key?: Key;
} | {
    type: "origins:attacker_action_when_hit";
    entity_action: EntityActionType;
    cooldown?: Integer;
    damage_condition?: DamageConditionType;
    hud_render?: HudRender;
} | {
    type: "origins:attribute";
    modifier?: AttributedAttributeModifier;
    modifiers?: AttributedAttributeModifier[];
    update_health?: Boolean;
} | {
    type: "origins:attribute_modify_transfer";
    class: Identifier;
    attribute: Identifier;
    multiplier?: Float;
} | {
    type: "origins:burn";
    interval: Integer;
    burn_duration: Integer;
} | {
    type: "origins:climbing";
    allow_holding?: Boolean;
    hold_condition?: EntityConditionType;
} | {
    type: "origins:conditioned_attribute";
    modifier?: AttributedAttributeModifier;
    modifiers?: AttributedAttributeModifier[];
    tick_rate?: Integer;
    update_health?: Boolean;
} | {
    type: "origins:conditioned_restrict_armor";
    head?: ItemConditionType;
    chest?: ItemConditionType;
    legs?: ItemConditionType;
    feet?: ItemConditionType;
    tick_rate?: Integer;
} | {
    type: "origins:cooldown";
    cooldown: Integer;
    hud_render?: HudRender;
} | {
    type: "origins:creative_flight";
} | {
    type: "origins:damage_over_time";
    interval?: Integer;
    onset_delay?: Integer;
    damage: Float;
    damage_easy?: Float;
    damage_source?: DamageSource;
    protection_enchantment?: Identifier;
    protection_effectiveness?: Float;
} | {
    type: "origins:disable_regen";
} | {
    type: "origins:effect_immunity";
    effect?: Identifier;
    effects?: Identifier[];
    inverted?: Boolean;
} | {
    type: "origins:elytra_flight";
    render_elytra: Boolean;
    texture_location?: Identifier;
} | {
    type: "origins:entity_glow";
    entity_condition?: EntityConditionType;
    bientity_condition?: BientityConditionType;
    use_teams?: Boolean;
    red?: Float;
    green?: Float;
    blue?: Float;
} | {
    type: "origins:entity_group";
    group: String;
} | {
    type: "origins:exhaust";
    interval?: Integer;
    exhaustion: Float;
} | {
    type: "origins:fire_immunity";
} | {
    type: "origins:fire_projectile";
    entity_type: Identifier;
    cooldown?: Integer;
    hud_render?: HudRender;
    count?: Integer;
    interval?: Integer;
    start_delay?: Integer;
    speed?: Float;
    divergence?: Float;
    sound?: Identifier;
    tag?: String;
    key?: Key;
} | {
    type: "origins:freeze";
} | {
    type: "origins:ignore_water";
} | {
    type: "origins:inventory";
    title?: String;
    container_type?: ContainerType;
    drop_on_death?: Boolean;
    drop_on_death_filter?: ItemConditionType;
    recoverable?: Boolean;
    key?: Key;
} | {
    type: "origins:invisibility";
    render_armor: Boolean;
} | {
    type: "origins:invulnerability";
    damage_condition: DamageConditionType;
} | {
    type: "origins:item_on_item";
    using_item_condition?: ItemConditionType;
    on_item_condition?: ItemConditionType;
    result?: ItemStack;
    result_from_on_stack?: Integer;
    using_item_action?: ItemActionType;
    on_item_action?: ItemActionType;
    result_item_action?: ItemActionType;
    entity_action?: EntityActionType;
} | {
    type: "origins:keep_inventory";
    item_condition?: ItemConditionType;
    slots?: Integer[];
} | {
    type: "origins:launch";
    cooldown?: Integer;
    speed: Float;
    hud_render?: HudRender;
    sound?: Identifier;
    key?: Key;
} | {
    type: "origins:lava_vision";
    s: Float;
    v: Float;
} | {
    type: "origins:model_color";
    red?: Float;
    green?: Float;
    blue?: Float;
    alpha?: Float;
} | {
    type: "origins:modify_air_speed";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:modify_attribute";
    attribute: Identifier;
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:modify_block_render";
    block_condition?: BlockConditionType;
    block: Identifier;
} | {
    type: "origins:modify_break_speed";
    block_condition?: BlockConditionType;
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:modify_camera_submersion";
    from?: String;
    to: String;
} | {
    type: "origins:modify_crafting";
    recipe?: Identifier;
    item_action?: ItemActionType;
    item_action_after_crafting?: ItemActionType;
    entity_action?: EntityActionType;
    block_action?: BlockActionType;
    item_condition?: ItemConditionType;
    result?: ItemStack;
} | {
    type: "origins:modify_damage_dealt";
    bientity_action?: BientityActionType;
    self_action?: EntityActionType;
    target_action?: EntityActionType;
    bientity_condition?: BientityConditionType;
    target_condition?: EntityConditionType;
    damage_condition?: DamageConditionType;
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:modify_damage_taken";
    bientity_action?: BientityActionType;
    self_action?: EntityActionType;
    attacker_action?: EntityActionType;
    bientity_condition?: BientityConditionType;
    apply_armor_condition?: EntityConditionType;
    damage_armor_condition?: EntityConditionType;
    damage_condition?: DamageConditionType;
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:modify_exhaustion";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:modify_falling";
    velocity: Float;
    take_fall_damage?: Boolean;
} | {
    type: "origins:modify_fluid_render";
    block_condition?: BlockConditionType;
    fluid_condition?: FluidConditionType;
    fluid: Identifier;
} | {
    type: "origins:modify_food";
    item_condition?: ItemConditionType;
    item_action?: ItemActionType;
    replace_stack?: ItemStack;
    food_modifier?: AttributeModifier;
    food_modifiers?: AttributeModifier[];
    saturation_modifier?: AttributeModifier;
    saturation_modifiers?: AttributeModifier[];
    entity_action?: EntityActionType;
    always_edible?: Boolean;
    prevent_effects?: Boolean;
} | {
    type: "origins:modify_grindstone";
    result_type?: String;
    entity_action?: EntityActionType;
    block_action?: BlockActionType;
    item_action?: ItemActionType;
    item_action_after_grinding?: ItemActionType;
    top_condition?: ItemConditionType;
    bottom_condition?: ItemConditionType;
    output_condition?: ItemConditionType;
    result_stack?: ItemStack;
    xp_modifier?: AttributeModifier;
} | {
    type: "origins:modify_harvest";
    block_condition?: BlockConditionType;
    allow: Boolean;
} | {
    type: "origins:modify_healing";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:modify_insomnia_ticks";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:modify_jump";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
    entity_action?: EntityActionType;
} | {
    type: "origins:modify_lava_speed";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:modify_player_spawn";
    dimension: Identifier;
    biome?: Identifier;
    structure?: Identifier;
    spawn_strategy?: String;
    dimension_distance_multiplier?: Float;
} | {
    type: "origins:modify_projectile_damage";
    damage_condition?: DamageConditionType;
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
    target_condition?: EntityConditionType;
    self_action?: EntityActionType;
    target_action?: EntityActionType;
} | {
    type: "origins:modify_slipperiness";
    block_condition?: BlockConditionType;
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:modify_status_effect_amplifier";
    status_effect?: Identifier;
    status_effects?: Identifier[];
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:modify_status_effect_duration";
    status_effect?: Identifier;
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:modify_swim_speed";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:modify_velocity";
    axes?: Identifier[];
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:modify_xp_gain";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
} | {
    type: "origins:multiple";
    // powers: Record<string, PowerType>;
} | {
    type: "origins:night_vision";
    strength?: Float;
} | {
    type: "origins:overlay";
    texture: Identifier;
    strength?: Float;
    red?: Float;
    green?: Float;
    blue?: Float;
    draw_mode: String;
    draw_phase: String;
    hide_with_hud?: Boolean;
    visible_in_third_person?: Boolean;
} | {
    type: "origins:particle";
    particle: ParticleEffect;
    frequency: Integer;
    visible_in_first_person?: Boolean;
} | {
    type: "origins:phasing";
    blacklist?: Boolean;
    block_condition?: BlockConditionType;
    render_type?: String;
    view_distance?: Float;
    phase_down_condition?: EntityConditionType;
} | {
    type: "origins:prevent_being_used";
    bientity_action?: BientityActionType;
    held_item_action?: ItemActionType;
    result_item_action?: ItemActionType;
    bientity_condition?: BientityConditionType;
    item_condition?: ItemConditionType;
    hands?: string[];
    result_stack?: ItemStack;
} | {
    type: "origins:prevent_block_selection";
    block_condition?: BlockConditionType;
} | {
    type: "origins:prevent_block_use";
    block_condition: BlockConditionType;
} | {
    type: "origins:prevent_death";
    damage_condition?: DamageConditionType;
    entity_action?: EntityActionType;
} | {
    type: "origins:prevent_elytra_flight";
    entity_action?: EntityActionType;
} | {
    type: "origins:prevent_entity_collision";
    bientity_condition?: BientityConditionType;
} | {
    type: "origins:prevent_entity_render";
    entity_condition?: EntityConditionType;
    bientity_condition?: BientityConditionType;
} | {
    type: "origins:prevent_entity_use";
    bientity_action?: BientityActionType;
    held_item_action?: ItemActionType;
    result_item_action?: ItemActionType;
    bientity_condition?: BientityConditionType;
    item_condition?: ItemConditionType;
    hands?: string[];
    result_stack?: ItemStack;
} | {
    type: "origins:prevent_feature_render";
    feature?: FeatureRenderer;
    features?: FeatureRenderer[];
} | {
    type: "origins:prevent_game_event";
    event?: Identifier;
    events?: Identifier[];
    tag?: Identifier;
    entity_action?: EntityActionType;
} | {
    type: "origins:prevent_item_use";
    item_condition?: ItemConditionType;
} | {
    type: "origins:prevent_sleep";
    block_condition?: BlockConditionType;
    message?: String;
    set_spawn_point?: Boolean;
} | {
    type: "origins:prevent_sprinting";
} | {
    type: "origins:recipe";
    recipe: CraftingRecipe;
} | {
    type: "origins:replace_loot_table";
    replace: Object;
    bientity_condition?: BientityConditionType;
    block_condition?: BlockConditionType;
    item_condition?: ItemConditionType;
    priority?: Integer;
} | {
    type: "origins:resource";
    min: Integer;
    max: Integer;
    hud_render?: HudRender;
    start_value?: Integer;
    min_action?: EntityActionType;
    max_action?: EntityActionType;
} | {
    type: "origins:restrict_armor";
    head?: ItemConditionType;
    chest?: ItemConditionType;
    legs?: ItemConditionType;
    feet?: ItemConditionType;
} | {
    type: "origins:self_action_on_hit";
    entity_action: EntityActionType;
    cooldown?: Integer;
    hud_render?: HudRender;
    damage_condition?: DamageConditionType;
    target_condition?: EntityConditionType;
} | {
    type: "origins:self_action_on_kill";
    entity_action: EntityActionType;
    cooldown?: Integer;
    hud_render?: HudRender;
    damage_condition?: DamageConditionType;
    target_condition?: EntityConditionType;
} | {
    type: "origins:self_action_when_hit";
    entity_action: EntityActionType;
    cooldown?: Integer;
    hud_render?: HudRender;
    damage_condition?: DamageConditionType;
} | {
    type: "origins:self_glow";
    entity_condition?: EntityConditionType;
    bientity_condition?: BientityConditionType;
    use_teams?: Boolean;
    red?: Float;
    green?: Float;
    blue?: Float;
} | {
    type: "origins:shader";
    shader: Identifier;
    toggleable?: Boolean;
} | {
    type: "origins:shaking";
} | {
    type: "origins:simple";
} | {
    type: "origins:stacking_status_effect";
    min_stacks: Integer;
    max_stacks: Integer;
    duration_per_stack: Integer;
    tick_rate?: Integer;
    effect?: StatusEffectInstance;
    effects?: StatusEffectInstance[];
} | {
    type: "origins:starting_equipment";
    stack?: PositionedItemStack;
    stacks?: PositionedItemStack[];
    recurrent?: Boolean;
} | {
    type: "origins:status_bar_texture";
    texture: Identifier;
} | {
    type: "origins:swimming";
} | {
    type: "origins:target_action_on_hit";
    entity_action: EntityActionType;
    cooldown?: Integer;
    hud_render?: HudRender;
    damage_condition?: DamageConditionType;
    target_condition?: EntityConditionType;
} | {
    type: "origins:toggle";
    active_by_default?: Boolean;
    key?: Key;
    retain_state?: Boolean;
} | {
    type: "origins:toggle_night_vision";
    active_by_default?: Boolean;
    strength?: Float;
    key?: Key;
} | {
    type: "origins:tooltip";
    item_condition?: ItemConditionType;
    text?: TextComponent;
    texts?: TextComponent[];
    priority?: Integer;
} | {
    type: "origins:walk_on_fluid";
    fluid: Identifier;
};

export type PowerType = {
    condition?: EntityConditionType;
} & PowerTypeList;
