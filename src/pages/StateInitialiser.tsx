import { FunctionComponent } from "react";

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ComparisonSection from "../components/ComparisonSection";
import PropsGetter from "../components/PropsGetter";
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
        <ComparisonSection
            beforeComponent={<PropsGetter />}
            beforeSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/PropsGetter"
            afterComponent={<StateInitialiser />}
            afterSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/StateInitialiser"
        />
    </Stack>
)

export default StateInitialiserPage;