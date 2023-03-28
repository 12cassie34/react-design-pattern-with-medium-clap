import { FunctionComponent, useContext } from "react";
import { animated } from "@react-spring/web";

import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";

import { MediumClapContext, MediumClapContextValue } from './ContextProvider';

const AddedClap: FunctionComponent = () => {
    const { addedClap, clapAddedAnimation } = useContext<MediumClapContextValue>(MediumClapContext);

    return (
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
    )
}

export default AddedClap;