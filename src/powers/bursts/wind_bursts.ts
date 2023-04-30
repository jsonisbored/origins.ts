import { Powers } from "../../lib";


export const windBursts: Powers = {
    air_blast: {
        name: "Air Blast",
        description: "Lifts entities into the air",
        type: "origins:active_self",
        entity_action: {
            type: "origins:area_of_effect",
            radius: 5,
            bientity_action: {
                type: "origins:add_velocity",
                y: 1.5,
                client: true,
                // server: true, /** @todo: check */
            },
        },
        cooldown: 60,
        hud_render: {
            should_render: true,
            sprite_location: "origins:textures/gui/resource_bar.png",
            bar_index: 5,
        },
        key: {
            key: "key.origins.primary_active",
        }
    },
};
