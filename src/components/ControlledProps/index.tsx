import { FunctionComponent, useState } from "react";

import Grid from '@mui/material/Grid';

import MediumClapContextProvider from "./MediumClapContext";

const ControlledPropsComponent: FunctionComponent = () => {
    const [clapValues, setClapValues] = useState({
        addedClap: 0,
        totalClap: 200
    });

    const handleAddedClap = () => {
            // eslint-disable-next-line @typescript-eslint/no-shadow
            setClapValues(({ addedClap, totalClap }) => ({
                addedClap: addedClap + 1,
                totalClap: totalClap + 1
            }));
    };

    return (
        <Grid container spacing={3}>
            <Grid item>
                <MediumClapContextProvider values={clapValues} setValue={handleAddedClap} />
            </Grid>
            <Grid item>
                <MediumClapContextProvider values={clapValues} setValue={handleAddedClap} />
            </Grid>
        </Grid>
    )
}

export default ControlledPropsComponent;