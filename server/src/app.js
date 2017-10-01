const path = require('path');

const React = require('react');
const { renderToNodeStream } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { createReactAppExpress } = require('create-react-app-express');

const {default: App} = require('../../src/App');
const clientBuildPath = path.resolve(__dirname, 'client');
const app = createReactAppExpress({
  clientBuildPath,
  universalRender: handleUniversalRender
});

function handleUniversalRender(req, res) {
  const context = {};
  const stream = renderToNodeStream(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  if (context.url) {
    res.redirect(301, context.url);
    return;
  }

  return stream;
}

module.exports = app;
