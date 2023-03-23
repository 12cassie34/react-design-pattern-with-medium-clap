import { FunctionComponent } from 'react';
import { animated } from "@react-spring/web";

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Typography from "@mui/material/Typography";

import useMediumClap from '../hooks/useMediumClap';

import DisplayLayout from './DisplayLayout';
import Streamers from './Streamers';

const MediumClapCustomHook: FunctionComponent = () => {
    const { 
        setIsHover, 
        addedClap, 
        totalClap, 
        boxShadowAnimation, 
        clapAddedAnimation, 
        streamersAnimation, 
        handleAddedClap } = useMediumClap();

    return (
        <DisplayLayout chipLabel='Custom Hook 🪝'>
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
                    <Typography variant="body2">{`+${addedClap}`}</Typography>
                </IconButton>
            </animated.div>
            <Typography variant="body2" color="primary" sx={{ position: 'absolute', top: '6px' }}>{totalClap}</Typography>
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
                <IconButton
                        onClick={handleAddedClap}
                        aria-label="thumb up"
                        color="primary"
                        sx={{ border: '1px solid', width: '60px', height: '60px', backgroundColor: '#ffffff' }}>
                    <ThumbUpIcon />
                </IconButton>
            </Stack>
        </DisplayLayout>
    )
}

export default MediumClapCustomHook;