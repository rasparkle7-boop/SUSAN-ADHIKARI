const myApp = require('./artifacts/api-server/dist/index.mjs');
module.exports = myApp.default || myApp;