const functions = require('firebase-functions');
const app = require('./dist/server/bundle').default;

exports.ssrLandingPage = functions.https.onRequest(app);
