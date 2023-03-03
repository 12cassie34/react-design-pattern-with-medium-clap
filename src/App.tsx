import { FunctionComponent, PropsWithChildren } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Box from "@mui/material/Box";
import CssBaseline from '@mui/material/CssBaseline';

import { drawerWidth } from './lib/constant';

import ResponsiveDrawer from './components/ResponsiveDrawer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <ResponsiveDrawer />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          {children}
        </Box>
      </Box>

    </ThemeProvider>
  );
}

export default App;
