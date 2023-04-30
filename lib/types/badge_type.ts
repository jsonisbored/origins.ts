import { Identifier, CraftingRecipe, TextComponent } from "./mod";


type BadgeTypeList = {
    type: "origins:crafting_recipe";
    sprite: Identifier;
    recipe: CraftingRecipe;
} | {
    type: "origins:keybind";
    sprite: Identifier;
    text: string;
} | {
    type: "origins:sprite";
    sprite: Identifier;
} | {
    type: "origins:tooltip";
    sprite: Identifier;
    text: TextComponent;
};

export type BadgeType = BadgeTypeList;