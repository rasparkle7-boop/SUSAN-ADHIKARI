module.exports = async (req, res) => {
  const path = require('path');
  const myApp = await import(path.join(process.cwd(), 'artifacts/api-server/dist/index.mjs'));
  return (myApp.default || myApp)(req, res);
};