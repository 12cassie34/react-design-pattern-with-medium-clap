import { FunctionComponent } from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import MediumClap from '../components/MediumClap';
import StateReducer from "../components/StateReducer";

const StateReducerPage: FunctionComponent = () => (
    <Stack spacing={2}>
        <Typography variant='h4'>State Reducer</Typography>
        <Typography variant='body1'>
            The state-reducer pattern hinges on the concept that you can allow the user of 
            your component or your hook to pass in a reducer and give them the control to 
            update your internal state from the outside.
        </Typography>
        <Typography variant='body1'>
            We do not pass a value or a callback, we just pass a reducer.
            And we are going to pass that reducer a state and an action object, 
            and they can go ahead and return new state.
        </Typography>
        <Grid container spacing={4}>
            <Grid item>
                <MediumClap />
            </Grid>
            <Grid item>
                <StateReducer />
            </Grid>
        </Grid>
    </Stack>
)

export default StateReducerPage;