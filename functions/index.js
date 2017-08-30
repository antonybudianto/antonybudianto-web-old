const functions = require('firebase-functions');

const app = require('./server/build/bundle');

exports.app = functions.https.onRequest(app);
