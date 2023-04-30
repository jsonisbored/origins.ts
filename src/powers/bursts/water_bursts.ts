import { EntityActionType, power } from "../../lib";


function wall(z: number, delay = 0) {
    return {
        type: "origins:delay",
        ticks: delay,
        action: {
            type: "origins:and",
            actions: [
                /*
                    3-3-3-3
                  A-B     4-4
                2-A         5-0
                2             0
                2             0
                2-9         6-0
                  8-8     7-6
                    1-1-1-1
                */
                [ 4, 2, 4,-2], // 0
                [-2,-4, 2,-4], // 1
                [-4, 2,-4,-2], // 2
                [-2, 4, 2, 4], // 3
                [ 2, 3, 3, 3], // 4
                [ 3, 2, 3, 2], // 5
                [ 3,-2, 3,-3], // 6
                [ 2,-3, 2,-3], // 7
                [-2,-3,-3,-3], // 8
                [-3,-2,-3,-2], // 9
                [-3, 2,-3, 3], // A
                [-2, 3,-2, 3], // B
            ].map(([x0,y0,x1,y1]) => ({
                type: "origins:execute_command",
                command: `fill ~${x0} ~-2 ~${y0} ~${x1} ~${z} ~${y1} water[level=1] replace air`
            }))
        },
    } as EntityActionType;
}

export const waterBursts = power({
    mighty_wave: {
        name: "Mighty Wave",
        description: "Summon a circle water shield around you with a 15s cooldown.",
        type: "origins:active_self",
        condition: {
            inverted: true,
            type: "origins:dimension",
            dimension: "minecraft:the_nether",
        },
        entity_action: {
            type: "origins:and",
            actions: [
                wall(0, 0),
                wall(1, 1),
                wall(2, 2),
                wall(3, 3),
                wall(4, 4),
            ],
        },
        cooldown: 500,
        hud_render: {
            should_render: true,
            sprite_location: "origins:textures/gui/community/huang/resource_bar_01.png",
            bar_index: 10,
        },
        key: {
            key: "key.origins.secondary_active",
        },
    },
});
