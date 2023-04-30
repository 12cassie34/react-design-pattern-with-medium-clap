import { FunctionComponent, ReactNode } from "react";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface ComparisonSectionProps {
    beforeComponent: ReactNode;
    afterComponent: ReactNode;
    beforeSourceCode: string;
    afterSourceCode: string;
}

const ComparisonSection: FunctionComponent<ComparisonSectionProps> = ({ beforeComponent, beforeSourceCode, afterComponent, afterSourceCode }) => (
    <Grid container spacing={4}>
        <Grid item>
            <Typography
                        onClick={() => window.open(beforeSourceCode, '_blank', 'noopener noreferrer')}
                        sx={{
                            color: 'aquamarine',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'underline'
                        }}
                        variant='h5'
                    >
                Before 🔗
            </Typography>
            {beforeComponent}
        </Grid>
        <Grid item>
            <Typography
                        onClick={() => window.open(afterSourceCode, '_blank', 'noopener noreferrer')}
                        sx={{
                            color: '#fc90a4',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'underline'
                        }}
                        variant='h5'
                    >
                After 🔗
            </Typography>
            {afterComponent}
        </Grid>
    </Grid>
        )

export default ComparisonSection;