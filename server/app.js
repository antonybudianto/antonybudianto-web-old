const path = require('path');
const React = require('react');
const { StaticRouter } = require('react-router');
const { getLoadableState } = require('loadable-components/server');
const { createReactAppExpress } = require('@cra-express/core');
const stringRenderer = require('@cra-express/universal-loader/lib/renderer/string-renderer')
  .default;
const { HelmetProvider } = require('react-helmet-async');

let { default: App } = require('../src/App');
const clientBuildPath = path.resolve(__dirname, '../client');
let context = {};
let helmetCtx = {};
let tag = '';
const app = createReactAppExpress({
  clientBuildPath,
  handleRender: stringRenderer,
  universalRender: handleUniversalRender,
  onFinish(req, res, html) {
    const { helmet } = helmetCtx;
    const finalHtml = html
      .replace('<div id="script"></div>', `${tag}`)
      .replace('<div id="helmetTitle"></div>', helmet.title.toString())
      .replace('<div id="helmetMeta"></div>', helmet.meta.toString())
      .replace('<div id="helmetLink"></div>', helmet.link.toString());
    if (context.status === 404) {
      return res.status(404).send(finalHtml);
    }
    if (context.url) {
      return res.redirect(301, context.url);
    }
    return res.send(finalHtml);
  }
});

function handleUniversalRender(req, res) {
  context = {};
  helmetCtx = {};
  const appEl = (
    <StaticRouter location={req.url} context={context}>
      <HelmetProvider context={helmetCtx}>
        <App />
      </HelmetProvider>
    </StaticRouter>
  );
  return getLoadableState(appEl).then(loadableState => {
    tag = loadableState.getScriptTag();
    return appEl;
  });
}

if (module.hot) {
  module.hot.accept('../src/App', () => {
    App = require('../src/App').default;
    console.log('App hot reloaded');
  });
}

export default app;
