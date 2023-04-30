import {
    EntityConditionType, ItemConditionType, BientityConditionType,
    BlockConditionType, BientityActionType, ItemActionType,
    BlockActionType, EntityActionType, DamageConditionType,
    Float, Identifier, Integer, ItemStack, ActionResult,
    HudRender, AttributedAttributeModifier, Key, DamageSource,
    ContainerType, AttributeModifier, FluidConditionType,
    ParticleEffect, FeatureRenderer, CraftingRecipe,
    StatusEffectInstance, PositionedItemStack, TextComponent, MetaConditionType, Power,
} from "./mod";


type ActionOnBeingUsed = {
    type: "origins:action_on_being_used";
    bientityAction?: BientityActionType;
    heldItemAction?: ItemActionType;
    resultItemAction?: ItemActionType;
    bientityCondition?: BientityConditionType;
    itemCondition?: ItemConditionType;
    hands?: string[];
    resultStack?: ItemStack;
    actionResult?: ActionResult;
    priority?: Integer;
};
type ActionOnBlockBreak = {
    type: "origins:action_on_block_break";
    entityAction?: EntityActionType;
    blockAction?: BlockActionType;
    blockCondition?: BlockConditionType;
    onlyWhenHarvested?: Boolean;
};
type ActionOnBlockUse = {
    type: "origins:action_on_block_use";
    entityAction?: EntityActionType;
    blockAction?: BlockActionType;
    blockCondition?: BlockConditionType;
    itemCondition?: ItemConditionType;
    hands?: string[];
    resultStack?: ItemStack;
    heldItemAction?: ItemActionType;
    resultItemAction?: ItemActionType;
    actionResult?: ActionResult;
};
type ActionOnCallback = {
    type: "origins:action_on_callback";
    entityActionChosen?: EntityActionType;
    executeChosenWhenOrb?: Boolean;
    entityActionGained?: EntityActionType;
    entityActionLost?: EntityActionType;
    entityActionAdded?: EntityActionType;
    entityActionRemoved?: EntityActionType;
    entityActionRespawned?: EntityActionType;
};
type ActionOnEntityUse = {
    type: "origins:action_on_entity_use";
    bientityAction?: BientityActionType;
    heldItemAction?: ItemActionType;
    resultItemAction?: ItemActionType;
    bientityCondition?: BientityConditionType;
    itemCondition?: ItemConditionType;
    hands?: string[];
    resultStack?: ItemStack;
    actionResult?: ActionResult;
    priority?: Integer;
};
type ActionOnHit = {
    type: "origins:action_on_hit";
    bientityAction: BientityActionType;
    bientityCondition?: BientityConditionType;
    damageCondition?: DamageConditionType;
    cooldown?: Integer;
    hudRender?: HudRender;
};
type ActionOnItemUse = {
    type: "origins:action_on_item_use";
    entityAction?: EntityActionType;
    itemAction?: ItemActionType;
    itemCondition?: ItemConditionType;
};
type ActionOnLand = {
    type: "origins:action_on_land";
    entityAction: EntityActionType;
};
type ActionOnWakeUp = {
    type: "origins:action_on_wake_up";
    entityAction?: EntityActionType;
    blockAction?: BlockActionType;
    blockCondition?: BlockConditionType;
};
type ActionOverTime = {
    type: "origins:action_over_time";
    interval?: Integer;
    entityAction?: EntityActionType;
    risingAction?: EntityActionType;
    fallingAction?: EntityActionType;
};
type ActionWhenDamageTaken = {
    type: "origins:action_when_damage_taken";
    entityAction: EntityActionType;
    damageCondition?: DamageConditionType;
    cooldown: Integer;
    hudRender?: HudRender;
};
type ActionWhenHit = {
    type: "origins:action_when_hit";
    bientityAction: BientityActionType;
    bientityCondition?: BientityConditionType;
    damageCondition?: DamageConditionType;
    cooldown?: Integer;
    hudRender?: HudRender;
};
type ActiveSelf = {
    type: "origins:active_self";
    entityAction: EntityActionType;
    cooldown?: Integer;
    hudRender?: HudRender;
    key?: Key;
};
type AttackerActionWhenHit = {
    type: "origins:attacker_action_when_hit";
    entityAction: EntityActionType;
    cooldown?: Integer;
    damageCondition?: DamageConditionType;
    hudRender?: HudRender;
};
type Attribute = {
    type: "origins:attribute";
    modifier?: AttributedAttributeModifier;
    modifiers?: AttributedAttributeModifier[];
    updateHealth?: Boolean;
};
type AttributeModifyTransfer = {
    type: "origins:attribute_modify_transfer";
    class: Identifier;
    attribute: Identifier;
    multiplier?: Float;
};
type Burn = {
    type: "origins:burn";
    interval: Integer;
    burnDuration: Integer;
};
type Climbing = {
    type: "origins:climbing";
    allowHolding?: Boolean;
    holdCondition?: EntityConditionType;
};
type ConditionedAttribute = {
    type: "origins:conditioned_attribute";
    modifier?: AttributedAttributeModifier;
    modifiers?: AttributedAttributeModifier[];
    tickRate?: Integer;
    updateHealth?: Boolean;
};
type ConditionedRestrictArmor = {
    type: "origins:conditioned_restrict_armor";
    head?: ItemConditionType;
    chest?: ItemConditionType;
    legs?: ItemConditionType;
    feet?: ItemConditionType;
    tickRate?: Integer;
};
type Cooldown = {
    type: "origins:cooldown";
    cooldown: Integer;
    hudRender?: HudRender;
};
type CreativeFlight = {
    type: "origins:creative_flight";
};
type DamageOverTime = {
    type: "origins:damage_over_time";
    interval?: Integer;
    onsetDelay?: Integer;
    damage: Float;
    damageEasy?: Float;
    damageSource?: DamageSource;
    protectionEnchantment?: Identifier;
    protectionEffectiveness?: Float;
};
type DisableRegen = {
    type: "origins:disable_regen";
};
type EffectImmunity = {
    type: "origins:effect_immunity";
    effect?: Identifier;
    effects?: Identifier[];
    inverted?: Boolean;
};
type ElytraFlight = {
    type: "origins:elytra_flight";
    renderElytra: Boolean;
    textureLocation?: Identifier;
};
type EntityGlow = {
    type: "origins:entity_glow";
    entityCondition?: EntityConditionType;
    bientityCondition?: BientityConditionType;
    useTeams?: Boolean;
    red?: Float;
    green?: Float;
    blue?: Float;
};
type EntityGroup = {
    type: "origins:entity_group";
    group: String;
};
type Exhaust = {
    type: "origins:exhaust";
    interval?: Integer;
    exhaustion: Float;
};
type FireImmunity = {
    type: "origins:fire_immunity";
};
type FireProjectile = {
    type: "origins:fire_projectile";
    entityType: Identifier;
    cooldown?: Integer;
    hudRender?: HudRender;
    count?: Integer;
    interval?: Integer;
    startDelay?: Integer;
    speed?: Float;
    divergence?: Float;
    sound?: Identifier;
    tag?: String;
    key?: Key;
};
type Freeze = {
    type: "origins:freeze";
};
type IgnoreWater = {
    type: "origins:ignore_water";
};
type Inventory = {
    type: "origins:inventory";
    title?: String;
    containerType?: ContainerType;
    dropOnDeath?: Boolean;
    dropOnDeathFilter?: ItemConditionType;
    recoverable?: Boolean;
    key?: Key;
};
type Invisibility = {
    type: "origins:invisibility";
    renderArmor: Boolean;
};
type Invulnerability = {
    type: "origins:invulnerability";
    damageCondition: DamageConditionType;
};
type ItemOnItem = {
    type: "origins:item_on_item";
    usingItemCondition?: ItemConditionType;
    onItemCondition?: ItemConditionType;
    result?: ItemStack;
    resultFromOnStack?: Integer;
    usingItemAction?: ItemActionType;
    onItemAction?: ItemActionType;
    resultItemAction?: ItemActionType;
    entityAction?: EntityActionType;
};
type KeepInventory = {
    type: "origins:keep_inventory";
    itemCondition?: ItemConditionType;
    slots?: Integer[];
};
type Launch = {
    type: "origins:launch";
    cooldown?: Integer;
    speed: Float;
    hudRender?: HudRender;
    sound?: Identifier;
    key?: Key;
};
type LavaVision = {
    type: "origins:lava_vision";
    s: Float;
    v: Float;
};
type ModelColor = {
    type: "origins:model_color";
    red?: Float;
    green?: Float;
    blue?: Float;
    alpha?: Float;
};
type ModifyAirSpeed = {
    type: "origins:modify_air_speed";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type ModifyAttribute = {
    type: "origins:modify_attribute";
    attribute: Identifier;
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type ModifyBlockRender = {
    type: "origins:modify_block_render";
    blockCondition?: BlockConditionType;
    block: Identifier;
};
type ModifyBreakSpeed = {
    type: "origins:modify_break_speed";
    blockCondition?: BlockConditionType;
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type ModifyCameraSubmersion = {
    type: "origins:modify_camera_submersion";
    from?: String;
    to: String;
};
type ModifyCrafting = {
    type: "origins:modify_crafting";
    recipe?: Identifier;
    itemAction?: ItemActionType;
    itemActionAfterCrafting?: ItemActionType;
    entityAction?: EntityActionType;
    blockAction?: BlockActionType;
    itemCondition?: ItemConditionType;
    result?: ItemStack;
};
type ModifyDamageDealt = {
    type: "origins:modify_damage_dealt";
    bientityAction?: BientityActionType;
    selfAction?: EntityActionType;
    targetAction?: EntityActionType;
    bientityCondition?: BientityConditionType;
    targetCondition?: EntityConditionType;
    damageCondition?: DamageConditionType;
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type ModifyDamageTaken = {
    type: "origins:modify_damage_taken";
    bientityAction?: BientityActionType;
    selfAction?: EntityActionType;
    attackerAction?: EntityActionType;
    bientityCondition?: BientityConditionType;
    applyArmorCondition?: EntityConditionType;
    damageArmorCondition?: EntityConditionType;
    damageCondition?: DamageConditionType;
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type ModifyExhaustion = {
    type: "origins:modify_exhaustion";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type ModifyFalling = {
    type: "origins:modify_falling";
    velocity: Float;
    takeFallDamage?: Boolean;
};
type ModifyFluidRender = {
    type: "origins:modify_fluid_render";
    blockCondition?: BlockConditionType;
    fluidCondition?: FluidConditionType;
    fluid: Identifier;
};
type ModifyFood = {
    type: "origins:modify_food";
    itemCondition?: ItemConditionType;
    itemAction?: ItemActionType;
    replaceStack?: ItemStack;
    foodModifier?: AttributeModifier;
    foodModifiers?: AttributeModifier[];
    saturationModifier?: AttributeModifier;
    saturationModifiers?: AttributeModifier[];
    entityAction?: EntityActionType;
    alwaysEdible?: Boolean;
    preventEffects?: Boolean;
};
type ModifyGrindstone = {
    type: "origins:modify_grindstone";
    resultType?: String;
    entityAction?: EntityActionType;
    blockAction?: BlockActionType;
    itemAction?: ItemActionType;
    itemActionAfterGrinding?: ItemActionType;
    topCondition?: ItemConditionType;
    bottomCondition?: ItemConditionType;
    outputCondition?: ItemConditionType;
    resultStack?: ItemStack;
    xpModifier?: AttributeModifier;
};
type ModifyHarvest = {
    type: "origins:modify_harvest";
    blockCondition?: BlockConditionType;
    allow: Boolean;
};
type ModifyHealing = {
    type: "origins:modify_healing";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type ModifyInsomniaTicks = {
    type: "origins:modify_insomnia_ticks";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type ModifyJump = {
    type: "origins:modify_jump";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
    entityAction?: EntityActionType;
};
type ModifyLavaSpeed = {
    type: "origins:modify_lava_speed";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type ModifyPlayerSpawn = {
    type: "origins:modify_player_spawn";
    dimension: Identifier;
    biome?: Identifier;
    structure?: Identifier;
    spawnStrategy?: String;
    dimensionDistanceMultiplier?: Float;
};
type ModifyProjectileDamage = {
    type: "origins:modify_projectile_damage";
    damageCondition?: DamageConditionType;
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
    targetCondition?: EntityConditionType;
    selfAction?: EntityActionType;
    targetAction?: EntityActionType;
};
type ModifySlipperiness = {
    type: "origins:modify_slipperiness";
    blockCondition?: BlockConditionType;
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type ModifyStatusEffectAmplifier = {
    type: "origins:modify_status_effect_amplifier";
    statusEffect?: Identifier;
    statusEffects?: Identifier[];
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type ModifyStatusEffectDuration = {
    type: "origins:modify_status_effect_duration";
    statusEffect?: Identifier;
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type ModifySwimSpeed = {
    type: "origins:modify_swim_speed";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type ModifyVelocity = {
    type: "origins:modify_velocity";
    axes?: Identifier[];
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type ModifyXpGain = {
    type: "origins:modify_xp_gain";
    modifier?: AttributeModifier;
    modifiers?: AttributeModifier[];
};
type NightVision = {
    type: "origins:night_vision";
    strength?: Float;
};
type Overlay = {
    type: "origins:overlay";
    texture: Identifier;
    strength?: Float;
    red?: Float;
    green?: Float;
    blue?: Float;
    drawMode: String;
    drawPhase: String;
    hideWithHud?: Boolean;
    visibleInThirdPerson?: Boolean;
};
type Particle = {
    type: "origins:particle";
    particle: ParticleEffect;
    frequency: Integer;
    visibleInFirstPerson?: Boolean;
};
type Phasing = {
    type: "origins:phasing";
    blacklist?: Boolean;
    blockCondition?: BlockConditionType;
    renderType?: String;
    viewDistance?: Float;
    phaseDownCondition?: EntityConditionType;
};
type PreventBeingUsed = {
    type: "origins:prevent_being_used";
    bientityAction?: BientityActionType;
    heldItemAction?: ItemActionType;
    resultItemAction?: ItemActionType;
    bientityCondition?: BientityConditionType;
    itemCondition?: ItemConditionType;
    hands?: string[];
    resultStack?: ItemStack;
};
type PreventBlockSelection = {
    type: "origins:prevent_block_selection";
    blockCondition?: BlockConditionType;
};
type PreventBlockUse = {
    type: "origins:prevent_block_use";
    blockCondition: BlockConditionType;
};
type PreventDeath = {
    type: "origins:prevent_death";
    damageCondition?: DamageConditionType;
    entityAction?: EntityActionType;
};
type PreventElytraFlight = {
    type: "origins:prevent_elytra_flight";
    entityAction?: EntityActionType;
};
type PreventEntityCollision = {
    type: "origins:prevent_entity_collision";
    bientityCondition?: BientityConditionType;
};
type PreventEntityRender = {
    type: "origins:prevent_entity_render";
    entityCondition?: EntityConditionType;
    bientityCondition?: BientityConditionType;
};
type PreventEntityUse = {
    type: "origins:prevent_entity_use";
    bientityAction?: BientityActionType;
    heldItemAction?: ItemActionType;
    resultItemAction?: ItemActionType;
    bientityCondition?: BientityConditionType;
    itemCondition?: ItemConditionType;
    hands?: string[];
    resultStack?: ItemStack;
};
type PreventFeatureRender = {
    type: "origins:prevent_feature_render";
    feature?: FeatureRenderer;
    features?: FeatureRenderer[];
};
type PreventGameEvent = {
    type: "origins:prevent_game_event";
    event?: Identifier;
    events?: Identifier[];
    tag?: Identifier;
    entityAction?: EntityActionType;
};
type PreventItemUse = {
    type: "origins:prevent_item_use";
    itemCondition?: ItemConditionType;
};
type PreventSleep = {
    type: "origins:prevent_sleep";
    blockCondition?: BlockConditionType;
    message?: String;
    setSpawnPoint?: Boolean;
};
type PreventSprinting = {
    type: "origins:prevent_sprinting";
};
type Recipe = {
    type: "origins:recipe";
    recipe: CraftingRecipe;
};
type ReplaceLootTable = {
    type: "origins:replace_loot_table";
    replace: Object;
    bientityCondition?: BientityConditionType;
    blockCondition?: BlockConditionType;
    itemCondition?: ItemConditionType;
    priority?: Integer;
};
type Resource = {
    type: "origins:resource";
    min: Integer;
    max: Integer;
    hudRender?: HudRender;
    startValue?: Integer;
    minAction?: EntityActionType;
    maxAction?: EntityActionType;
};
type RestrictArmor = {
    type: "origins:restrict_armor";
    head?: ItemConditionType;
    chest?: ItemConditionType;
    legs?: ItemConditionType;
    feet?: ItemConditionType;
};
type SelfActionOnHit = {
    type: "origins:self_action_on_hit";
    entityAction: EntityActionType;
    cooldown?: Integer;
    hudRender?: HudRender;
    damageCondition?: DamageConditionType;
    targetCondition?: EntityConditionType;
};
type SelfActionOnKill = {
    type: "origins:self_action_on_kill";
    entityAction: EntityActionType;
    cooldown?: Integer;
    hudRender?: HudRender;
    damageCondition?: DamageConditionType;
    targetCondition?: EntityConditionType;
};
type SelfActionWhenHit = {
    type: "origins:self_action_when_hit";
    entityAction: EntityActionType;
    cooldown?: Integer;
    hudRender?: HudRender;
    damageCondition?: DamageConditionType;
};
type SelfGlow = {
    type: "origins:self_glow";
    entityCondition?: EntityConditionType;
    bientityCondition?: BientityConditionType;
    useTeams?: Boolean;
    red?: Float;
    green?: Float;
    blue?: Float;
};
type Shader = {
    type: "origins:shader";
    shader: Identifier;
    toggleable?: Boolean;
};
type Shaking = {
    type: "origins:shaking";
};
type Simple = {
    type: "origins:simple";
};
type StackingStatusEffect = {
    type: "origins:stacking_status_effect";
    minStacks: Integer;
    maxStacks: Integer;
    durationPerStack: Integer;
    tickRate?: Integer;
    effect?: StatusEffectInstance;
    effects?: StatusEffectInstance[];
};
type StartingEquipment = {
    type: "origins:starting_equipment";
    stack?: PositionedItemStack;
    stacks?: PositionedItemStack[];
    recurrent?: Boolean;
};
type StatusBarTexture = {
    type: "origins:status_bar_texture";
    texture: Identifier;
};
type Swimming = {
    type: "origins:swimming";
};
type TargetActionOnHit = {
    type: "origins:target_action_on_hit";
    entityAction: EntityActionType;
    cooldown?: Integer;
    hudRender?: HudRender;
    damageCondition?: DamageConditionType;
    targetCondition?: EntityConditionType;
};
type Toggle = {
    type: "origins:toggle";
    activeByDefault?: Boolean;
    key?: Key;
    retainState?: Boolean;
};
type ToggleNightVision = {
    type: "origins:toggle_night_vision";
    activeByDefault?: Boolean;
    strength?: Float;
    key?: Key;
};
type Tooltip = {
    type: "origins:tooltip";
    itemCondition?: ItemConditionType;
    text?: TextComponent;
    texts?: TextComponent[];
    priority?: Integer;
};
type WalkOnFluid = {
    type: "origins:walk_on_fluid";
    fluid: Identifier;
};
type Multiple<T extends string> = {
    [k in T]: k extends "type"
        ? "origins:multiple"
        : k extends "condition"
            ? EntityConditionType
            : Power<T>;
};


// Testing, idk if this helps with error messages
// Will try interfaces as well
type PowerTypeList<T extends string> = 
	| ActionOnBeingUsed
	| ActionOnBlockBreak
	| ActionOnBlockUse
	| ActionOnCallback
	| ActionOnEntityUse
	| ActionOnHit
	| ActionOnItemUse
	| ActionOnLand
	| ActionOnWakeUp
	| ActionOverTime
	| ActionWhenDamageTaken
	| ActionWhenHit
	| ActiveSelf
	| AttackerActionWhenHit
	| Attribute
	| AttributeModifyTransfer
	| Burn
	| Climbing
	| ConditionedAttribute
	| ConditionedRestrictArmor
	| Cooldown
	| CreativeFlight
	| DamageOverTime
	| DisableRegen
	| EffectImmunity
	| ElytraFlight
	| EntityGlow
	| EntityGroup
	| Exhaust
	| FireImmunity
	| FireProjectile
	| Freeze
	| IgnoreWater
	| Inventory
	| Invisibility
	| Invulnerability
	| ItemOnItem
	| KeepInventory
	| Launch
	| LavaVision
	| ModelColor
	| ModifyAirSpeed
	| ModifyAttribute
	| ModifyBlockRender
	| ModifyBreakSpeed
	| ModifyCameraSubmersion
	| ModifyCrafting
	| ModifyDamageDealt
	| ModifyDamageTaken
	| ModifyExhaustion
	| ModifyFalling
	| ModifyFluidRender
	| ModifyFood
	| ModifyGrindstone
	| ModifyHarvest
	| ModifyHealing
	| ModifyInsomniaTicks
	| ModifyJump
	| ModifyLavaSpeed
	| ModifyPlayerSpawn
	| ModifyProjectileDamage
	| ModifySlipperiness
	| ModifyStatusEffectAmplifier
	| ModifyStatusEffectDuration
	| ModifySwimSpeed
	| ModifyVelocity
	| ModifyXpGain
	| NightVision
	| Overlay
	| Particle
	| Phasing
	| PreventBeingUsed
	| PreventBlockSelection
	| PreventBlockUse
	| PreventDeath
	| PreventElytraFlight
	| PreventEntityCollision
	| PreventEntityRender
	| PreventEntityUse
	| PreventFeatureRender
	| PreventGameEvent
	| PreventItemUse
	| PreventSleep
	| PreventSprinting
	| Recipe
	| ReplaceLootTable
	| Resource
	| RestrictArmor
	| SelfActionOnHit
	| SelfActionOnKill
	| SelfActionWhenHit
	| SelfGlow
	| Shader
	| Shaking
	| Simple
	| StackingStatusEffect
	| StartingEquipment
	| StatusBarTexture
	| Swimming
	| TargetActionOnHit
	| Toggle
	| ToggleNightVision
	| Tooltip
	| WalkOnFluid
	| Multiple<T>;


export type PowerType<T extends string> = {
    condition?: EntityConditionType;
} & PowerTypeList<T>;
