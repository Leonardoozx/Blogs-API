const createJWT = require('../auth/createJWT');

const login = async (req, res) => {
  const token = createJWT(req.body.email);
  res.status(200).json({ token });
};

module.exports = { login };
