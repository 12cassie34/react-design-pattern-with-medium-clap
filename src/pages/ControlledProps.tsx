import { FunctionComponent } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ComparisonSection from '../components/ComparisonSection';
import CompoundClap from '../components/CompoundClap';
import ControlledPropsComponent from '../components/ControlledProps';

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
        <Typography variant='body1'>
            The practical usage is when you want to change the same state in different
            components, the controlled props is really useful.
        </Typography>
        <code>
            {`<MediumClap value={myStateValue} onCallback={updateStateCallback}>`}
        </code>
        <ComparisonSection
            beforeComponent={<CompoundClap />}
            beforeSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/CompoundClap"
            afterComponent={<ControlledPropsComponent />}
            afterSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/ControlledProps"
        />
    </Stack>
    )

export default ControlledProps;