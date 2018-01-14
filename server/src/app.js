import { getLoadableState } from 'loadable-components/server';

const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router');
const { createReactAppExpress } = require('@cra-express/core');
const stringRenderer = require('@cra-express/universal-loader/lib/renderer/string-renderer').default;

const {default: App} = require('../../src/App');
const clientBuildPath = path.resolve(__dirname, 'client');
let tag = ''
const app = createReactAppExpress({
  clientBuildPath,
  handleRender: stringRenderer,
  universalRender: handleUniversalRender,
  onEndReplace(html) {
    return html.replace('<div id="script"></div>', `${tag}`)
  }
});

function handleUniversalRender(req, res) {
  const context = {};
  const app = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )
  return getLoadableState(app).then(loadableState => {
    tag = loadableState.getScriptTag();
    const str = ReactDOMServer.renderToString(app);

    if (context.status === 404) {
      return res.status(404).send(str);
    }
    if (context.url) {
      return res.redirect(301, context.url);
    }

    return str;
  });
}

module.exports = app;
