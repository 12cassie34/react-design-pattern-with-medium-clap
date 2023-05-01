/* eslint-disable react/jsx-indent */
import { HashRouter, Route, RouteObject, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import darkTheme from './styles/theme';
import reportWebVitals from './reportWebVitals';
import routes from './router/router';

import App from './App';

const appContainer = document.getElementById('root') as Element | DocumentFragment;

const root = ReactDOM.createRoot(appContainer);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <HashRouter basename="/react-design-pattern-with-medium-clap">
        <App>
          <Routes>
          {routes.map(({ path, element }: RouteObject) => (
              <Route key={path || ''} path={path || ''} element={element} />
            )
          )}
          </Routes>
          
        </App>
      </HashRouter >
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
