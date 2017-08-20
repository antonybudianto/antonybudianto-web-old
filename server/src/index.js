if (process.env.NODE_ENV === 'development') {
  require('ignore-styles');
  require('babel-register')({
    ignore: /\/(build|node_modules)\//,
    presets: ['env', 'react-app']
  });
  console.log('Babel registered!');
}

const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`CRA Server listening on port ${PORT}!`)
});

module.exports = app;
