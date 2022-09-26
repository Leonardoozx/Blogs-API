const userServices = require('../services/user');
const createToken = require('../auth/createJWT');

const insertUser = async ({ body }, res) => {
  await userServices.insertUser(body);
  const token = createToken(body.email);
  res.status(201).json({ token });
};

const showAllUsers = async (_req, res) => {
  const users = await userServices.showAllUsers();  
  res.status(200).json(users);
};

module.exports = { insertUser, showAllUsers };
