const functions = require('firebase-functions');

const app = require('./server/build/bundlemain');

exports.app = functions.https.onRequest(app);
