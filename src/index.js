import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadComponents } from 'loadable-components'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootswatch/flatly/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

loadComponents().then(() => {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  , document.getElementById('root'));
});
registerServiceWorker();
