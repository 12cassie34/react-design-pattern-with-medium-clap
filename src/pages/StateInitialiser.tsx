import { FunctionComponent } from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import MediumClap from '../components/MediumClap';
import StateInitialiser from "../components/StateInitialiser";

const StateInitialiserPage: FunctionComponent = () => (
    <Stack spacing={2}>
        <Typography variant='h4'>State Initialiser</Typography>
        <Typography variant='body1'>
            For states, we basically have 3 types of mode: initial states, updating states and resetting states.
        </Typography>
        <Typography variant='body1'>
            In the state initialiser pattern, we let the user set initial states of their components, 
            and also make it possible for them at any point in time to reset the state of the components 
            to the initial state.
        </Typography>
        <Grid container spacing={4}>
            <Grid item>
                <MediumClap />
            </Grid>
            <Grid item>
                <StateInitialiser />
            </Grid>
        </Grid>
    </Stack>
)

export default StateInitialiserPage;