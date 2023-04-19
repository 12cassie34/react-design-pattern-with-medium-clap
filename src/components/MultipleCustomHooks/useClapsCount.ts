import { useState } from 'react';

const useClapsCount = () => {
    const [addedClap, setAddedClap] = useState(0);
    const [totalClap, setTotalClap] = useState(200);

    return { addedClap, setAddedClap, totalClap, setTotalClap }
}

export default useClapsCount;