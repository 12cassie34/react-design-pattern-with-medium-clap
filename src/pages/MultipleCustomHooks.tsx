import { FunctionComponent } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import CustomHooksContent from '../components/CustomHooksContent';
import MediumClap from '../components/MediumClap';
import MultipleCustomHooks from '../components/MultipleCustomHooks';

const MultipleCustomHooksPage: FunctionComponent = () => (
    <Stack spacing={2}>
        <CustomHooksContent />
        <Grid container spacing={4}>
            <Grid item>
                <MediumClap />
            </Grid>
            <Grid item>
                <MultipleCustomHooks />
            </Grid>
        </Grid>
    </Stack>
)

export default MultipleCustomHooksPage;