import { FunctionComponent } from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import MediumClap from '../components/MediumClap';

const ControlledProps: FunctionComponent = () => (
    <Stack spacing={2}>
        <Typography variant='h4'>Controlled Props</Typography>
        <Typography variant='body1'>
            We use the <b>controlled component</b>concept to build controlled props components in React.
            Like controlled components, we pass: 
        </Typography>
        <Typography variant='body1'>
            <b>value</b> which is a state value.
        </Typography>
        <Typography variant='body1'>
            <b>onCallback</b> which is a state updater.
        </Typography>
        <Typography variant='body1'>
            in a controlled props component.
        </Typography>
        <code>
            {`<MediumClap value={myStateValue} onCallback={updateStateCallback}>`}
        </code>
        <Grid container spacing={4}>
            <Grid item>
                <MediumClap />
            </Grid>
            <Grid item>
                todo
            </Grid>
        </Grid>
    </Stack>
    )

export default ControlledProps;