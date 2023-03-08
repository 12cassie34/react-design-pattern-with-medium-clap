import { FunctionComponent, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import Chip from "@mui/material/Chip";
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const MediumClap: FunctionComponent = () => {
    const [isHover, setIsHover] = useState(false);
    const boxShadowAnimation = useSpring({
        from: {opacity: isHover ? 0 : 1, transition: 'ease' },
        to: [{ opacity: isHover ? 1 : 0 }],
        loop: isHover,
        config: { duration: 1_000 },
      });

    return (
        <Paper sx={{ padding: '32px', width: '300px', backgroundColor: '#ffffff' }}>
            <Chip label="The Original Clap 🎶" color="primary" sx={{ display: 'flex', marginBottom: '16px' }} />
            <Stack sx={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <animated.div 
                        style={{
                            borderRadius: '50%',
                            width: '60px',
                            height:' 60px',
                            position: 'absolute',
                            boxShadow: '0px 0px 28px #90caf9',
                            ...boxShadowAnimation,
                        }}
                    />
                    <IconButton
                        onMouseEnter={() => setIsHover(true)} 
                        onMouseLeave={() => setIsHover(false)}
                        aria-label="thumb up" 
                        color="primary" 
                        sx={{ border: '1px solid', width: '60px', height: '60px' }}>
                        <ThumbUpIcon />
                    </IconButton>
                </div>
            </Stack>
        </Paper>
    )
}

export default MediumClap;