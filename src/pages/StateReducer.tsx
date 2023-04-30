import { FunctionComponent } from "react";

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ComparisonSection from "../components/ComparisonSection";
import StateInitialiser from "../components/StateInitialiser";
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
        <ComparisonSection
            beforeComponent={<StateInitialiser />}
            beforeSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/StateInitialiser"
            afterComponent={<StateReducer />}
            afterSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/StateReducer"
        />
    </Stack>
)

export default StateReducerPage;