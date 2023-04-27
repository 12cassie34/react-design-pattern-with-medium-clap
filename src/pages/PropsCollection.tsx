import { FunctionComponent } from "react";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import MediumClap from '../components/MediumClap';
import PropsCollection from "../components/PropsCollection";

const PropsCollectionPage: FunctionComponent = () => (
    <Stack spacing={2}>
        <Typography variant='h4'>Props Collection</Typography>
        <Typography variant='body1'>
            We can use this technique to allow users use their own UI with our clap animation logics.
        </Typography>
        <Grid container spacing={4}>
            <Grid item>
                <MediumClap />
            </Grid>
            <Grid item>
                <PropsCollection />
            </Grid>
        </Grid>
    </Stack>
)

export default PropsCollectionPage;