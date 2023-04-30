import { BadgeType, Identifier, Integer, EntityConditionType, PowerType } from "./mod";


export type ConditionedOrigin = {
    condition: EntityConditionType;
    origins: Origins;
};

export type OriginLayer = {
    order?: Integer;
    origins: Record<Identifier, Origin|ConditionedOrigin>;
    enabled?: boolean;
    replace?: boolean;
    name?: string;
    gui_title?: {
        choose_origin?: string;
        view_origin?: string;
    };
    missing_name?: string;
    missing_description?: string;
    allow_random?: boolean;
    allow_random_unchoosable?: boolean;
    exclude_random?: Identifier[];
    default_origin?: Identifier;
    auto_choose?: boolean;
    hidden?: boolean;
    loading_priority?: Integer;
};

export type Origin = {
    powers?: Powers;
    icon?: {
        item: Identifier;
        amount?: Integer;
        tag?: string;
    };
    unchoosable?: boolean;
    order?: Integer;
    impact?: Integer;
    name?: string;
    description?: string;
    upgrades?: Array<{
        condition: Identifier;
        origin: Identifier;
        announcement?: string;
    }>;
    loading_priority?: Integer;
};
export type Origins = Record<Identifier, Origin>;

export type Power = {
    type: Identifier;
    name?: string;
    description?: string;
    hidden?: boolean;
    condition?: EntityConditionType;
    loadingPriority?: Integer;
    badges?: BadgeType[];
} & PowerType;
export type Powers = Record<Identifier, Power>;
