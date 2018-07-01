import { getLoadableState } from 'loadable-components/server';

const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router');
const { createReactAppExpress } = require('@cra-express/core');
const stringRenderer = require('@cra-express/universal-loader/lib/renderer/string-renderer')
  .default;

const { default: App } = require('../src/App');
const clientBuildPath = path.resolve(__dirname, '../client');
let context = {};
let tag = '';
const app = createReactAppExpress({
  clientBuildPath,
  handleRender: stringRenderer,
  universalRender: handleUniversalRender,
  onFinish(req, res, html) {
    const finalHtml = html.replace('<div id="script"></div>', `${tag}`);
    if (context.status === 404) {
      return res.status(404).send(finalHtml);
    }
    if (context.url) {
      return res.redirect(301, context.url);
    }
    return res.send(finalHtml);
  },
});

function handleUniversalRender(req, res) {
  context = {};
  const app = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  return getLoadableState(app).then(loadableState => {
    tag = loadableState.getScriptTag();
    const str = ReactDOMServer.renderToString(app);
    return str;
  });
}

module.exports = app;
