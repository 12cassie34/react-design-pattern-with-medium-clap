import { FunctionComponent } from 'react';

import Stack from '@mui/material/Stack';

import ComparisonSection from '../components/ComparisonSection';
import ControlledPropsComponent from '../components/ControlledProps';
import CustomHooksContent from '../components/CustomHooksContent';
import MultipleCustomHooks from '../components/MultipleCustomHooks';

const MultipleCustomHooksPage: FunctionComponent = () => (
    <Stack spacing={2}>
        <CustomHooksContent />
        <ComparisonSection
            beforeComponent={<ControlledPropsComponent />}
            beforeSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/ControlledProps"
            afterComponent={<MultipleCustomHooks />}
            afterSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/MultipleCustomHooks"
        />
    </Stack>
)

export default MultipleCustomHooksPage;