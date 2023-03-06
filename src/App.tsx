import { FunctionComponent, PropsWithChildren } from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { drawerWidth } from './lib/constant';

import ResponsiveDrawer from './components/ResponsiveDrawer';

const App: FunctionComponent<PropsWithChildren> = ({ children }) => (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <ResponsiveDrawer />
        <Box
      component="main"
      sx={{
        flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, marginTop: '64px',
      }}
    >
            {children}
        </Box>
    </Box>
);

export default App;
