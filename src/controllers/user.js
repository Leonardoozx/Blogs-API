const userServices = require('../services/user');
const createToken = require('../auth/createJWT');

const insertUser = async ({ body }, res) => {
  await userServices.insertUser(body);
  const token = createToken(body.email);
  res.status(201).json({ token });
};

module.exports = { insertUser };
