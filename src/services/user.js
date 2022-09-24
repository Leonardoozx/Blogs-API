const { User } = require('../models');

const findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const insertUser = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({
    displayName,
    email,
    password,
    image,
  });
  return newUser;
};

module.exports = { findUserByEmail, insertUser };
