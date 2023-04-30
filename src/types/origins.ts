import { BadgeType, Identifier, Integer, EntityConditionType, PowerType } from "./mod";


export type ConditionedOrigin<T extends string> = {
    condition: EntityConditionType;
    origins: Record<Identifier, Origin<T>>;
};

export type OriginLayer<T extends string> = {
    order?: Integer;
    origins: Record<Identifier, Origin<T>|ConditionedOrigin<T>>;
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

export type Origin<T extends string> = {
    powers?: Record<Identifier, Power<T>>;
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

export type Power<T extends string> = {
    type: Identifier;
    name?: string;
    description?: string;
    hidden?: boolean;
    condition?: EntityConditionType;
    loadingPriority?: Integer;
    badges?: BadgeType[];
} & PowerType<T>;
