module.exports = async (req, res) => {
  const myApp = await import('../artifacts/api-server/dist/index.mjs');
  return (myApp.default || myApp)(req, res);
};