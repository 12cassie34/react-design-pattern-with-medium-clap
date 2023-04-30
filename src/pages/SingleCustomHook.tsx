import { FunctionComponent } from 'react';

import Stack from '@mui/material/Stack';

import ComparisonSection from '../components/ComparisonSection';
import CustomHooksContent from '../components/CustomHooksContent';
import MediumClap from '../components/MediumClap';
import SingleCustomHook from '../components/SingleCustomHook';

const SingleCustomHookPage: FunctionComponent = () => (
    <Stack spacing={2}>
        <CustomHooksContent />
        <ComparisonSection 
            beforeComponent={<MediumClap />}
            beforeSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/blob/main/src/components/MediumClap.tsx"
            afterComponent={<SingleCustomHook />}
            afterSourceCode="https://github.com/12cassie34/react-design-pattern-with-medium-clap/tree/main/src/components/SingleCustomHook"
        />
    </Stack>
);

export default SingleCustomHookPage;
