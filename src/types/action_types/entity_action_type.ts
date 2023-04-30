import {
    ItemActionType, ItemConditionType, BientityConditionType,
    BlockConditionType, BientityActionType, BlockActionType,
    DestructionType, InventoryType, ShapeType,
    
    Float, Identifier, Integer, Vector,
    StatusEffectInstance, DamageSource, ItemSlot, ItemStack, 
    AttributeModifier, FluidHandling, ParticleEffect, MetaActionType,
} from "../mod";


type EntityActionTypeList = {
    type: "origins:add_velocity";
    x?: Float;
    y?: Float;
    z?: Float;
    space?: String;
    client?: Boolean;
    server?: Boolean;
    set?: Boolean;
} | {
    type: "origins:add_xp";
    points?: Integer;
    levels?: Integer;
} | {
    type: "origins:apply_effect";
    effect?: StatusEffectInstance;
    effects?: StatusEffectInstance[];
} | {
    type: "origins:area_of_effect";
    radius?: Float;
    bientity_action: BientityActionType;
    bientity_condition?: BientityConditionType;
    include_target?: Boolean;
} | {
    type: "origins:block_action_at";
    block_action: BlockActionType;
} | {
    type: "origins:change_resource";
    resource: Identifier;
    change: Integer;
    operation?: String;
} | {
    type: "origins:clear_effect";
    effect?: Identifier;
} | {
    type: "origins:crafting_table";
} | {
    type: "origins:damage";
    amount: Float;
    source: DamageSource;
} | {
    type: "origins:dismount";
} | {
    type: "origins:drop_inventory";
    inventory_type?: InventoryType;
    entity_action?: EntityActionType;
    item_action?: ItemActionType;
    item_condition?: ItemConditionType;
    slot?: ItemSlot;
    slots?: ItemSlot[];
    power?: Identifier;
    throw_randomly?: Boolean;
    retain_ownership?: Boolean;
} | {
    type: "origins:emit_game_event";
    event: Identifier;
} | {
    type: "origins:ender_chest";
} | {
    type: "origins:equipped_item_action";
    equipment_slot: String;
    action: ItemActionType;
} | {
    type: "origins:execute_command";
    command: String;
} | {
    type: "origins:exhaust";
    amount: Float;
} | {
    type: "origins:explode";
    power: Float;
    destruction_type?: DestructionType;
    damage_self?: Boolean;
    indestructible?: BlockConditionType;
    destructible?: BlockConditionType;
    create_fire?: Boolean;
} | {
    type: "origins:extinguish";
} | {
    type: "origins:feed";
    food: Integer;
    saturation: Float;
} | {
    type: "origins:gain_air";
    value: Integer;
} | {
    type: "origins:give";
    stack: ItemStack;
    item_action?: ItemActionType;
    preferred_slot?: String;
} | {
    type: "origins:grant_power";
    power: Identifier;
    source: Identifier;
} | {
    type: "origins:heal";
    amount: Float;
} | {
    type: "origins:modify_death_ticks";
    modifier: AttributeModifier;
} | {
    type: "origins:modify_inventory";
    inventory_type?: InventoryType;
    entity_action?: EntityActionType;
    item_action?: ItemActionType;
    item_condition?: ItemConditionType;
    slot?: ItemSlot;
    slots?: ItemSlot[];
    power?: Identifier;
} | {
    type: "origins:modify_resource";
    modifier: AttributeModifier;
    resource: Identifier;
} | {
    type: "origins:modify_stat";
    stat: Identifier;
    modifier: AttributeModifier;
} | {
    type: "origins:passenger_action";
    action?: EntityActionType;
    bientity_action?: BientityActionType;
    bientity_condition?: BientityConditionType;
    recursive?: Boolean;
} | {
    type: "origins:play_sound";
    sound: Identifier;
    volume?: Float;
    pitch?: Float;
} | {
    type: "origins:raycast";
    distance: Float;
    block?: Boolean;
    entity?: Boolean;
    shape_type?: ShapeType;
    fluid_handling?: FluidHandling;
    bientity_condition?: BientityConditionType;
    bientity_action?: BientityActionType;
    block_action?: BlockActionType;
    before_action?: EntityActionType;
    hit_action?: EntityActionType;
    miss_action?: EntityActionType;
    command_at_hit?: String;
    command_hit_offset?: Float;
    command_along_ray?: String;
    command_step?: Float;
    command_along_ray_only_on_hit?: Boolean;
} | {
    type: "origins:replace_inventory";
    inventory_type?: InventoryType;
    entity_action?: EntityActionType;
    item_action?: ItemActionType;
    item_condition?: ItemConditionType;
    slot?: ItemSlot;
    slots?: ItemSlot[];
    power?: Identifier;
    stack: ItemStack;
} | {
    type: "origins:revoke_power";
    power: Identifier;
    source: Identifier;
} | {
    type: "origins:riding_action";
    action?: EntityActionType;
    bientity_action?: BientityActionType;
    bientity_condition?: BientityConditionType;
    recursive?: Boolean;
} | {
    type: "origins:set_fall_distance";
    fall_distance: Float;
} | {
    type: "origins:set_on_fire";
    duration: Integer;
} | {
    type: "origins:spawn_effect_cloud";
    radius?: Float;
    radius_on_use?: Float;
    wait_time?: Integer;
    effect?: StatusEffectInstance;
    effects?: StatusEffectInstance[];
} | {
    type: "origins:spawn_entity";
    entity_type: Identifier;
    tag?: String;
    entity_action?: EntityActionType;
} | {
    type: "origins:spawn_particles";
    particle: ParticleEffect;
    count: Integer;
    speed?: Float;
    force?: Boolean;
    spread?: Vector;
    offset_y?: Float;
} | {
    type: "origins:swing_hand";
    hand?: String;
} | {
    type: "origins:toggle";
    power: Identifier;
} | {
    type: "origins:trigger_cooldown";
    power: Identifier;
};

export type EntityActionType = MetaActionType<EntityActionTypeList>;