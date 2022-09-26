const createJWT = require('../auth/createJWT');

const login = async ({ body }, res) => {
  const token = createJWT(body.email);
  res.status(200).json({ token });
};

module.exports = { login };
