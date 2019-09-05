const functions = require('firebase-functions');

const app = require('./crau-dist/server/bundle').default;

exports.app = functions.https.onRequest(app);
