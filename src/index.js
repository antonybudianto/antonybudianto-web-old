import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { loadComponents } from 'loadable-components';

import App from './App';
import { unregister } from './registerServiceWorker';

import 'bootswatch/dist/flatly/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

loadComponents().then(() => {
  hydrate(
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>,
    document.getElementById('root')
  );
});

if (module.hot) {
  module.hot.accept();
}

unregister();
