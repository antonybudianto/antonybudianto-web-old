import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootswatch/flatly/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
