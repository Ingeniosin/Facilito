import 'bootstrap/dist/css/bootstrap.css';
import {CssBaseline} from "@mui/material";
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './config/serviceWorkerRegistration';
import reportWebVitals from './config/reportWebVitals';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter basename={baseUrl}>
      <CssBaseline />
      <App />
  </BrowserRouter>
);


serviceWorkerRegistration.unregister();
reportWebVitals();
