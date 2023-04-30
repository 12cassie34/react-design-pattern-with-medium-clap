import { FunctionComponent } from "react";

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ComparisonSection from "../components/ComparisonSection";
import PropsCollection from "../components/PropsCollection";
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
        <ComparisonSection
            beforeComponent={<PropsCollection />}
            beforeSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/PropsCollection"
            afterComponent={<PropsGetter />}
            afterSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/PropsGetter"
        />
    </Stack>
)

export default PropsGetterPage;