import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, useRoutes } from 'react-router-dom';

import App from './App';

import reportWebVitals from './reportWebVitals';
import './index.css';
import routes from './router/router';

const Routes = () => {
  const element = useRoutes(routes);

  return element;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <App>
        <Routes />
      </App>
    </HashRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
