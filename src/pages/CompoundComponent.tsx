import { FunctionComponent } from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import MediumClap from '../components/MediumClap';

const CompoundComponent: FunctionComponent = () => {
    console.log("hello world")
    return (
        <Stack spacing={2}>
            <Typography variant='h4'>Compound Components</Typography>
            <Typography variant='body1'>
                We use the context concept to build compound components in React. Compound components have several benefits, like: 
            </Typography>
            <Typography variant='body1'>
                <b>Customizability</b>: since we extract all the child components, we can dynamically customize these components.
            </Typography>
            <Typography variant='body1'>
                <b>Understandable</b>: all the components are listed hierarchy, so other developers can see the logic.
            </Typography>
            <Typography variant='body1'>
                <b>Props Overload</b>: we can ship precisely the right props to the right components.
            </Typography>
            <Grid container spacing={4}>
                <Grid item>
                    <MediumClap />
                </Grid>
                <Grid item>
                    TODO
                </Grid>
            </Grid>
        </Stack>
    )
}

export default CompoundComponent;