import { FunctionComponent, useState } from 'react';
import { useSpring } from '@react-spring/web';

import Stack from '@mui/material/Stack';

import { MediumClapContext } from './ContextProvider'; 

import AddedClap from './AddedClap';
import ClapAnimation from './ClapAnimation';
import ClapButton from './ClapButton';
import DisplayLayout from '../DisplayLayout';
import TotalClap from './TotalClap';

const CompoundClap: FunctionComponent = () => {
    const [isHover, setIsHover] = useState(false);
    const [addedClap, setAddedClap] = useState(0);
    const [totalClap, setTotalClap] = useState(200);

    const [streamersAnimation, streamersApi] = useSpring(() => ({}));
    const [clapAddedAnimation, clapAddedApi] = useSpring(() => ({
    }));

    const handleAddedClap = () => {
        if (addedClap < 50) {
            clapAddedApi.start({
                from: { opacity: 2, transform: 'translate(0px, 10px)', transition: 'ease-in-out', transitionDelay: '2500' },
                to: { opacity: 0, transform: 'translate(0px, -100px)' },
                config: { duration: 700 },
            });
            streamersApi.start({
                from: { opacity: 10, transform: 'scale(0)' },
                to: { opacity: 0, transform: 'scale(1)' }
            });
            setAddedClap(addedClap + 1);
            setTotalClap(totalClap + 1);
        }
    };

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <MediumClapContext.Provider value={{
            isHover,
            addedClap,
            totalClap,
            streamersAnimation,
            streamersApi,
            clapAddedAnimation,
            clapAddedApi,
            handleAddedClap
        }}>
            <DisplayLayout chipLabel="Compound Component 🐝">
                <AddedClap />
                <TotalClap />
                <Stack 
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    sx={{
                        position: 'absolute'
                    }}>
                    <ClapAnimation />
                    <ClapButton />
                </Stack>
            </DisplayLayout>
        </MediumClapContext.Provider>
        
    )
}

export default CompoundClap;