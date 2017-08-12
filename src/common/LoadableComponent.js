import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = opts => Loadable({
  loading: () => <div>Loading...</div>,
  ...opts
});

export default LoadableComponent;
