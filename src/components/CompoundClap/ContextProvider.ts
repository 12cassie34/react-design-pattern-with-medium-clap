import { Lookup, SpringRef } from "@react-spring/web";
import { createContext } from "react";

export interface MediumClapContextValue {
    isHover: boolean;
    addedClap: number;
    totalClap: number;
    streamersAnimation?: Record<string, string>;
    streamersApi?: SpringRef<Lookup<unknown>>;
    clapAddedAnimation?: Record<string, string>;
    clapAddedApi?: SpringRef<Lookup<unknown>>;
    handleAddedClap?: () => void;
}

export const MediumClapContext = createContext<MediumClapContextValue>({
    isHover: false,
    addedClap: 0,
    totalClap: 200,
});
