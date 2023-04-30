import { Powers } from "../../lib";


export const windPassives: Powers = {
    soft_landing: {
        name: "Soft Landing",
        description: "Takes no fall damage.",
        type: "origins:modify_damage_taken",
        damage_condition: {
            type: "origins:from_falling",
        },
        modifier: {
            operation: "multiply_base_additive",
            value: -1,
        },
    },
    
    speed_bost: {
        name: "Speed Boost",
        description: "Increases air speed.",
        type: "origins:modify_air_speed",
        modifier: {
            operation: "multiply_base_additive",
            value: 1.5,
        },
    },
};
