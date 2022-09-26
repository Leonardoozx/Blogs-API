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

const showUserById = async ({ params }, res) => {
  const { type, message, status } = await userServices.showUserById(+params.id);
  if (type) return res.status(status).json({ message });
  res.status(status).json(message);
};

module.exports = { insertUser, showAllUsers, showUserById };
