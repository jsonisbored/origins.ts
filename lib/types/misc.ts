import { EntityConditionType } from "./mod";


/**
 * @todo: Make an accurate type
 */
export type Meta = {
    name: string;
    id: string;
    pack_format: 1|2|3|4|5|6|7|8|9|10|11|12;
    description: string;
};


/**
 * ```js
 * "namespace:path"
 * ```
 * 
 * Namespace defaults to `minecraft`.
 * 
 * ### Example
 * 
 * ```js
 * "origins:block"
 * ```
 */
export type Identifier = Lowercase<string>;
export type Integer = number;
export type Float = number;


export type Comparison = "<" | "<=" | ">" | ">=" | "==" | "!=";
export type ItemSlot =
    | "armor.chest" | "armor.feet" | "armor.head" | "armor.legs"
    | `container.${0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53}`
    | `enderchest.${0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26}`
    | `horse.${0|1|2|3|4|5|6|7|8|9|10|11|12|13|14}`
    | "horse.armor" | "horse.saddle"
    | `hotbar.${0|1|2|3|4|5|6|7|8}`
    | `inventory.${0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26}`
    | `villager.${0|1|2|3|4|5|6|7}`
    | "weapon.mainhand" | "weapon.offhand" | "weapon";
export type DestructionType = "break" | "destroy" | "none";
export type EquipmentSlot = "mainhand" | "offhand" | "head" | "chest" | "legs" | "feet";
export type InventoryType = "inventory" | "power";
export type ShapeType = "collider" | "outline" | "visual";
export type FluidHandling = "any" | "none" | "source_only";
export type ActionResult = "consume_partial" | "consume" | "fail" | "pass" | "success";
export type ContainerType = "chest" | "hopper" | "dropper" | "dispenser" | "double_chest";
export type FluidConditionType = {
    type: "origins:empty";
} | {
    type: "origins:in_tag";
    tag: Identifier;
} | {
    type: "origins:still";
};


export type FeatureRenderer = 
    | "armor"
    | "cape"
    | "cat_collar"
    | "deadmau"
    | "dolphin_held_item"
    | "drowned_overlay"
    | "elytra"
    | "enderman_block"
    | "energy_swirl_overlay"
    | "eyes"
    | "fox_held_item"
    | "head"
    | "held_item"
    | "horse_armor"
    | "horse_marking"
    | "iron_golem_crack"
    | "iron_golem_flower"
    | "llama_decor"
    | "mooshroom_mushroom"
    | "panda_held_item"
    | "saddle"
    | "sheep_wool"
    | "shoulder_parrot"
    | "shulker_head"
    | "slime_overlay"
    | "snowman_pumpkin"
    | "stray_overlay"
    | "stuck_objects"
    | "trident_riptide"
    | "tropical_fish_color"
    | "villager_clothing"
    | "villager_held_item"
    | "wolf_collar";


export type Vector = {
    x: number;
    y: number;
    z: number;
};
export type Ingredient = {
    item?: string;
    tag?: string;
};
export type TextComponent = string | {
    text: string;
    color: string;
} | Array<string | Record<string, string>>;
export type ParticleEffect = {
    type: Identifier;
    params: string;
};
export type StatusEffectInstance = {
    effect: Identifier;
    duration?: Integer;
    amplifier?: Integer;
    is_ambient?: boolean;
    show_particles?: boolean;
    show_icon?: boolean;
};
export type DamageSource = {
    name: string;
    bypass_armor?: boolean;
    fire?: boolean;
    unblockable?: boolean;
    magic?: boolean;
    out_of_world?: boolean;
};
export type AttributedAttributeModifier = {
    attribute: Identifier;
    operation: "addition" | "multiply_base" | "multiply_total";
    value: Float;
    name?: string;
};
export type ItemStack = {
    item: Identifier;
    amount?: Integer;
    tag?: string;
};
export type PositionedItemStack = {
    item: Identifier;
    amount?: Integer;
    tag?: string;
    slot?: Integer;
};
export type CraftingRecipe = {
    type: Identifier;
    id: Identifier;
    result: {
        item: Identifier;
        count: Integer;
    };
    ingredients: Ingredient[];
} | {
    type: Identifier;
    id: Identifier;
    result: {
        item: Identifier;
        count: Integer;
    };
    pattern: string[];
    key: Record<string, Ingredient>;
};
export type AttributeModifierOperation =
    | "add_base_early"
    | "multiply_base_additive"
    | "multiply_base_multiplicative"
    | "add_base_late"
    | "min_base"
    | "max_base"
    | "set_base"
    | "multiply_total_additive"
    | "multiply_total_multiplicave"
    | "min_total"
    | "max_total"
    | "set_total";

export type AttributeModifier = {
    operation: AttributeModifierOperation;
    value: Float;
    resource?: Identifier;
    name?: string;
};
export type HudRender = {
    should_render?: boolean;
    sprite_location?: Identifier;
    bar_index?: Integer;
    condition?: EntityConditionType;
    inverted?: boolean;
};

export type KeyBindings =
    | "key.origins.primary_active"
    | "key.origins.secondary_active"
    | "key.origins.view_origin"

    | "key.sprint"
    | "key.forward"
    | "key.left"
    | "key.back"
    | "key.right"
    | "key.jump"
    | "key.inventory"
    | "key.drop"
    | "key.swapOffhand"
    | "key.chat"
    | "key.sneak"
    | "key.playerlist"
    | "key.attack"
    | "key.use"
    | "key.pickItem"
    | "key.command"
    | "key.screenshot"
    | "key.togglePerspective"
    | "key.smoothCamera"
    | "key.fullscreen"
    | "key.spectatorOutlines"
    | "key.hotbar.1"
    | "key.hotbar.2"
    | "key.hotbar.3"
    | "key.hotbar.4"
    | "key.hotbar.5"
    | "key.hotbar.6"
    | "key.hotbar.7"
    | "key.hotbar.8"
    | "key.hotbar.9"
    | "key.saveToolbarActivator"
    | "key.loadToolbarActivator"
    | "key.advancement";

export type Key = {
    key: KeyBindings;
    continuous?: boolean;
};
