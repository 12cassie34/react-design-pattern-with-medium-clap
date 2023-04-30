import { useCallback, useReducer, useRef } from 'react';

enum ClapAction {
    Add = 'add',
    Reset = 'reset',
}

interface ClapState {
    addedClap: number;
    totalClap: number;
}

type ActionAdd = { type: ClapAction.Add };
type ActionRest = { type: ClapAction.Reset; payload: ClapState };
type Actions = ActionAdd | ActionRest;
  
const reducer = ({ addedClap, totalClap }: ClapState, action: Actions) => {
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
}

const useClapsCount = ({ initialAddedClap = 0, initialTotalClap = 200 }: UseClapsCountProps) => {
    const initialValues = useRef({ initialAddedClap, initialTotalClap });
    const resetCount = useRef(0);

    const [clapValues, dispatch] = useReducer(reducer, { addedClap: initialAddedClap, totalClap: initialTotalClap });

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