import { FunctionComponent, PropsWithChildren } from "react";

import Chip from "@mui/material/Chip";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

interface DisplayLayoutProps {
    chipLabel: string;
}

const DisplayLayout: FunctionComponent<PropsWithChildren<DisplayLayoutProps>> = ({ children, chipLabel }) => (
    <Paper sx={{ padding: '32px', width: '300px', backgroundColor: '#ffffff' }}>
        <Chip label={chipLabel} color="primary" sx={{ display: 'flex', marginBottom: '60px' }} />
        <Stack sx={{ display: 'flex', alignItems: 'center', position: 'relative', padding: '32px' }}>
            {children}
        </Stack>
    </Paper>
    )

export default DisplayLayout;