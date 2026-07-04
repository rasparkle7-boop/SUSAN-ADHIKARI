const path = require('path');
const myApp = require(path.join(process.cwd(), 'artifacts/api-server/dist/index.mjs'));
module.exports = myApp.default || myApp;