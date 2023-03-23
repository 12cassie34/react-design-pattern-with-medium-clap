import { FunctionComponent } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import MediumClap from '../components/MediumClap';
import MediumClapCustomHook from '../components/MediumClapCustomHook';

const CustomHooks: FunctionComponent = () => (
    <Stack spacing={2}>
        <Typography variant='h4'>Custom Hooks</Typography>
        <Typography variant='body1'>
            Custom Hooks let you share logic between components.
        </Typography>
        <Typography variant='body1'>
            Strictly speaking, it&apos;s not a design patter, but it comes in handy when you want to reuse your logic.
        </Typography>
        <Grid container spacing={4}>
            <Grid item>
                <MediumClap />
            </Grid>
            <Grid item>
                <MediumClapCustomHook />
            </Grid>
        </Grid>
    </Stack>
);

export default CustomHooks;
