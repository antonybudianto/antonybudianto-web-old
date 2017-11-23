import { getLoadableState } from 'loadable-components/server';

const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router');
const { createReactAppExpress } = require('create-react-app-express');

const {default: App} = require('../../src/App');
const clientBuildPath = path.resolve(__dirname, 'client');
let tag = ''
const app = createReactAppExpress({
  clientBuildPath,
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
    return ReactDOMServer.renderToNodeStream(app);
  });
}

module.exports = app;
