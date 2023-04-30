import { useCallback, useRef, useState } from 'react';

interface UseClapsCountProps {
    initialAddedClap?: number;
    initialTotalClap?: number;
}

const useClapsCount = ({ initialAddedClap = 0, initialTotalClap = 200 }: UseClapsCountProps) => {
    const initialValues = useRef({ initialAddedClap, initialTotalClap });
    const resetCount = useRef(0);

    const [addedClap, setAddedClap] = useState(initialValues.current.initialAddedClap);
    const [totalClap, setTotalClap] = useState(initialValues.current.initialTotalClap);

    const resetClapCounts = useCallback(() => {
        if (initialValues.current.initialAddedClap !== addedClap) {
            setAddedClap(initialValues.current.initialAddedClap);
            setTotalClap(initialValues.current.initialTotalClap);
            resetCount.current += 1;
        }
    }, [addedClap]);

    return { addedClap, setAddedClap, totalClap, setTotalClap, resetClapCounts, resetDep: resetCount.current }
}

export default useClapsCount;