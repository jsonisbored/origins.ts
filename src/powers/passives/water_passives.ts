import { Powers } from "../../lib";


export const waterPassives: Powers = {
    air_conservation: {
        name: "Air Conservation",
        description: "You lose air slower underwater.",
        type: "origins:action_over_time",
        interval: 20,
        entity_action: {
            type: "origins:gain_air",
            value: 15,
        },
    },

    water_swiftness: {
        name: "Water Swiftness",
        description: "Greatly enhanced speed in water.",
        type: "origins:multiple",
        powers: {
            swim_speed: {
                type: "origins:modify_swim_speed",
                modifier: {
                    operation: "multiply_total_multiplicave",
                    value: 4,
                },
            },
            mining_speed: {
                condition: {
                    type: "origins:swimming",
                },
                type: "origins:modify_break_speed",
                modifier: {
                    operation: "multiply_total_additive",
                    value: 2.5,
                }
            }
        }
    },
};
