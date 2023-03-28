import { FunctionComponent, useContext } from "react";

import Typography from "@mui/material/Typography";

import { MediumClapContext, MediumClapContextValue } from './ContextProvider';

const TotalClap: FunctionComponent = () => {
    const { totalClap } = useContext<MediumClapContextValue>(MediumClapContext);

    return <Typography variant="body2" color="primary" sx={{ position: 'absolute', top: '6px' }}>{totalClap}</Typography>
}

export default TotalClap;