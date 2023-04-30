import { FunctionComponent } from "react";

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ComparisonSection from "../components/ComparisonSection";
import MultipleCustomHooks from "../components/MultipleCustomHooks";
import PropsCollection from "../components/PropsCollection";

const PropsCollectionPage: FunctionComponent = () => (
    <Stack spacing={2}>
        <Typography variant='h4'>Props Collection</Typography>
        <Typography variant='body1'>
            We can use this technique to allow users use their own UI with our clap animation logics.
        </Typography>
        <ComparisonSection
            beforeComponent={<MultipleCustomHooks />}
            beforeSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/MultipleCustomHooks"
            afterComponent={<PropsCollection />}
            afterSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/PropsCollection"
        />
    </Stack>
)

export default PropsCollectionPage;