import { FunctionComponent } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import MediumClap from '../components/MediumClap';

const Home: FunctionComponent = () => (
    <Stack spacing={2}>
        <Typography variant='h4'>Why this project?</Typography>
        <Typography variant='body1'>
            This project follows the step of the course &quot;The Complete Guide to Advanced React Component Patterns&quot;
            by Ohans Emmanuel.
        </Typography>
        <Typography variant='body1'>
            The course is designed for learning the common design patterns of React.
            Learners can build a Medium clap animation(as below 😍) using these design patterns, including:
        </Typography>
        <Typography variant='body1'>
            Custom Hooks, Compound Components, Extensible Styles, Control Props, Props Collection,
            Props Getters, State Initialisers, State Reducers
        </Typography>
        <MediumClap />
    </Stack>
    );

export default Home;
