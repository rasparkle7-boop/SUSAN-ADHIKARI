module.exports = async (req, res) => {
  const myApp = await import('./appcode/index.mjs');
  return (myApp.default || myApp)(req, res);
};