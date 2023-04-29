import { FunctionComponent } from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import MediumClap from '../components/MediumClap';
import PropsGetter from "../components/PropsGetter";

const PropsGetterPage: FunctionComponent = () => (
    <Stack spacing={2}>
        <Typography variant='h4'>Props Getter</Typography>
        <Typography variant='body1'>
            The props collection is an object that we pass in the component.
        </Typography>
        <Typography variant='body1'>
            In the other hand, the props getter is a function that we invoke.
            We will return an object, but within the function, we can do some complicated operation.
            And that is the strength of the props getter.
        </Typography>
        <Grid container spacing={4}>
            <Grid item>
                <MediumClap />
            </Grid>
            <Grid item>
                <PropsGetter />
            </Grid>
        </Grid>
    </Stack>
)

export default PropsGetterPage;