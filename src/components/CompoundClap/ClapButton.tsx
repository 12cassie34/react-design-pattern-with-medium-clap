import { FunctionComponent, useContext } from "react";

import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { MediumClapContext, MediumClapContextValue } from './ContextProvider';

const ClapButton: FunctionComponent = () => {
    const { handleAddedClap } = useContext<MediumClapContextValue>(MediumClapContext);

    return (
        <IconButton
                        onClick={handleAddedClap}
                        aria-label="thumb up"
                        color="primary"
                        sx={{ border: '1px solid', width: '60px', height: '60px', backgroundColor: '#ffffff' }}>
            <ThumbUpIcon />
        </IconButton>
    )
}

export default ClapButton;