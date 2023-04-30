import { Powers } from "../../lib";


export const windSkills: Powers = {
    gust_of_wind: {
        name: "Gust of Wind",
        description: "Propells you upward.",
        type: "origins:active_self",
        entity_action: {
            type: "origins:add_velocity",
            y: 1.5,
            space: "world", /** @todo: check */ 
            client: true,
            server: true,
        },
        cooldown: 25,
        hud_render: {
            should_render: true,
            sprite_location: "origins:textures/gui/community/huang/resource_bar_01.png",
            bar_index: 8,
        },
    },
};
