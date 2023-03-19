import { animated, useSpring } from "@react-spring/web";
import React, { FunctionComponent, useState } from "react";

import Chip from "@mui/material/Chip";
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Typography from "@mui/material/Typography";

const MediumClap: FunctionComponent = () => {
    const [isHover, setIsHover] = useState(false);
    const [addedClap, setAddedClap] = useState(0);
    const [totalClap, setTotalClap] = useState(200);

    const boxShadowAnimation = useSpring({
        from: { opacity: isHover ? 0 : 1, transition: 'ease' },
        to: [{ opacity: isHover ? 1 : 0 }],
        loop: isHover,
        config: { duration: 1_000 },
    });
    const [springs, api] = useSpring(() => ({
    }))

    const handleAddedClap = () => {
        if (addedClap < 50) {
            api.start({
                from: { opacity: 2, transform: 'translate(0px, 10px)', transition: 'ease-in-out', transitionDelay: '2500' },
                to: { opacity: 0, transform: 'translate(0px, -100px)' },
                config: { duration: 700 },
            });
            setAddedClap(addedClap + 1);
            setTotalClap(totalClap + 1);
        }
    };

    return (
        <Paper sx={{ padding: '32px', width: '300px', backgroundColor: '#ffffff' }}>
            <Chip label="The Original Clap 🎶" color="primary" sx={{ display: 'flex', marginBottom: '60px' }} />
            
            <Stack sx={{ display: 'flex', alignItems: 'center', position: 'relative', padding: '32px' }}>
                <animated.div
                    style={{
                        position: 'relative',
                        ...springs
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
                    <IconButton
                    onClick={handleAddedClap}
                    aria-label="thumb up"
                    color="primary"
                    sx={{ border: '1px solid', width: '60px', height: '60px', backgroundColor: '#ffffff' }}>
                        <ThumbUpIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default MediumClap;