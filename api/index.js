module.exports = async (req, res) => {
  try {
    const myApp = await import('./appcode/index.mjs');
    return (myApp.default || myApp)(req, res);
  } catch (err) {
    res.status(500).send('Error loading: ' + err.message);
  }
};