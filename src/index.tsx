/* eslint-disable react/jsx-indent */
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import routes from './router/router';

import App from './App';

const appContainer = document.getElementById('root') as Element | DocumentFragment;

const root = ReactDOM.createRoot(appContainer);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Routes = () => {
  const element = useRoutes(routes);

  return element;
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <App>
          <Routes />
        </App>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
