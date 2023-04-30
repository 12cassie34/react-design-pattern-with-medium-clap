import { useCallback, useReducer, useRef } from 'react';

export enum ClapAction {
    Add = 'add',
    Reset = 'reset',
}

export interface ClapState {
    addedClap: number;
    totalClap: number;
}

type ActionAdd = { type: ClapAction.Add };
type ActionRest = { type: ClapAction.Reset; payload: ClapState };
export type Actions = ActionAdd | ActionRest;
  
export const internalReducer = ({ addedClap, totalClap }: ClapState, action: Actions) => {
    switch (action.type) {
        case ClapAction.Add:
          return {
            addedClap: addedClap + 1,
            totalClap: totalClap + 1
          };
        case ClapAction.Reset:
            return action.payload;
        default:
          return { addedClap, totalClap };
    }
}

interface UseClapsCountProps {
    initialAddedClap?: number;
    initialTotalClap?: number;
    customReducer?: ({ addedClap, totalClap }: ClapState, action: Actions) => ClapState;
}

const useClapsCount = ({ initialAddedClap = 0, initialTotalClap = 200, customReducer = internalReducer }: UseClapsCountProps) => {
    const initialValues = useRef({ initialAddedClap, initialTotalClap });
    const resetCount = useRef(0);

    const [clapValues, dispatch] = useReducer(customReducer, { addedClap: initialAddedClap, totalClap: initialTotalClap });

    const handleAddClap = () => dispatch({
        type: ClapAction.Add
    })

    const resetClapCounts = useCallback(() => {
        if (initialValues.current.initialAddedClap !== clapValues.addedClap) {
            dispatch({
                type: ClapAction.Reset,
                payload: {
                    addedClap: initialAddedClap,
                    totalClap: initialTotalClap
                }
            })
            resetCount.current += 1;
        }
    }, [clapValues.addedClap, initialAddedClap, initialTotalClap]);

    return { 
        clapValues,
        handleAddClap, 
        resetClapCounts, 
        resetDep: resetCount.current 
    }
}

export default useClapsCount;