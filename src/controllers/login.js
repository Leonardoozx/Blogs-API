const logIn = (_req, res) => {
  res.status(200).json({ message: 'its working my man' });
};

module.exports = {
  logIn,
};
