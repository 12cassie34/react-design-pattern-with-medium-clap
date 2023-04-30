import { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react';
import { animated } from '@react-spring/web';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Typography from '@mui/material/Typography';

import useClapAnimation from './useClapAnimation';
import useClapsCount from './useClapsCount';

import DisplayLayout from '../DisplayLayout';
import Streamers from '../Streamers';

interface ClapContainerProps {
    handleClick: () => void;
}

const ClapContainer: FunctionComponent<PropsWithChildren<ClapContainerProps>> = ({ children, handleClick, ...props }) => (
    <IconButton
                        onClick={handleClick}
                        aria-label="thumb up"
                        color="primary"
                        sx={{ border: '1px solid', width: '60px', height: '60px', backgroundColor: '#ffffff' }}
                        {...props}>
        {children}
    </IconButton>
    )

const StateReducer: FunctionComponent = () => {
    const [isReset, setIsReset] = useState(false);

    const { clapAddedAnimation, boxShadowAnimation, streamersAnimation, setIsHover, clapAddedApi, streamersApi } = useClapAnimation();
    const { clapValues, handleAddClap, resetClapCounts, resetDep } = useClapsCount({
        initialAddedClap: 0,
        initialTotalClap: 200
    });
    

    const handleAddedClap = () => {
        if (clapValues.addedClap < 50) {
            clapAddedApi.start({
                from: { opacity: 2, transform: 'translate(0px, 10px)', transition: 'ease-in-out', transitionDelay: '2500' },
                to: { opacity: 0, transform: 'translate(0px, -100px)' },
                config: { duration: 700 },
            });
            streamersApi.start({
                from: { opacity: 10, transform: 'scale(0)' },
                to: { opacity: 0, transform: 'scale(1)' }
            });
            handleAddClap();
        }
    };

    const getClapContainerProps = () => 
        // Here, your can do some complicated operation before passing 
        // props in <ClapContainer />
         ({
            'aria-valuenow': clapValues.totalClap,
            'aria-valuemax': 50
        })

    useEffect(() => {
        setIsReset(true);

        const timeoutId = setTimeout(() => {
            setIsReset(false);
        }, 2_000);

        return () => clearTimeout(timeoutId);
    }, [setIsReset, resetDep]);
    
    return (
        <>
            <DisplayLayout chipLabel='State Initialiser 🎂'>
                <animated.div
                    style={{
                        position: 'relative',
                        opacity: 0,
                        ...clapAddedAnimation
                    }}
                >
                    <IconButton sx={{
                        padding: '20px',
                        backgroundColor: '#90caf9',
                        width: '20px',
                        height: '20px',
                    }}>
                        <Typography variant="body2">{`+${clapValues.addedClap}`}</Typography>
                    </IconButton>
                </animated.div>
                <Typography variant="body2" color="primary" sx={{ position: 'absolute', top: '6px' }}>{clapValues.totalClap}</Typography>
                <Stack 
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    sx={{
                        position: 'absolute'
                    }}
                >
                    <animated.div
                        style={{
                            borderRadius: '50%',
                            width: '60px',
                            height: ' 60px',
                            position: 'absolute',
                            boxShadow: '0px 0px 28px #90caf9',
                            ...boxShadowAnimation,
                        }}
                    />
                    <animated.div
                        style={{
                            opacity: 0,
                            ...streamersAnimation
                        }}
                    >
                        <Streamers />
                    </animated.div>
                    <ClapContainer handleClick={handleAddedClap} {...getClapContainerProps()} >
                        <ThumbUpIcon />
                    </ClapContainer>
                </Stack>
            </DisplayLayout>
            {isReset && <Typography>Is resetting {resetDep}...</Typography>}
            <Button onClick={resetClapCounts} sx={{
                display: 'block',
                margin: '0 auto'
            }}>Reset</Button>
        </>);
}

export default StateReducer;