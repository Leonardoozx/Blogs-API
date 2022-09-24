const userServices = require('../services/user');

const insertUser = async (req, res) => {
  const insertNewUser = await userServices.insertUser(req.body);
  res.status(201).json({ insertNewUser });
};

module.exports = { insertUser };
