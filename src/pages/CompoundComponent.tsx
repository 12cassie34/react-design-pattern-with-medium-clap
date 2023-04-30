import { FunctionComponent } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ComparisonSection from '../components/ComparisonSection';
import CompoundClap from '../components/CompoundClap';
import SingleCustomHook from '../components/SingleCustomHook';

const CompoundComponent: FunctionComponent = () => (
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
        <ComparisonSection 
            beforeComponent={<SingleCustomHook />}
            beforeSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/SingleCustomHook"
            afterComponent={<CompoundClap />}
            afterSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/CompoundClap"
        />
    </Stack>
    )

export default CompoundComponent;