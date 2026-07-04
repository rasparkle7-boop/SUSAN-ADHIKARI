module.exports = async (req, res) => {
  const myApp = await import('./dist/index.mjs');
  return (myApp.default || myApp)(req, res);
};