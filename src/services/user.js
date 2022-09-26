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

const showAllUsers = async () => {
  const allUsers = await User.findAll();
  const usersArrWithoutPass = allUsers.map(({ id, displayName, email, image }) => ({
    id,
    displayName,
    email,
    image,
  }));
  return usersArrWithoutPass;
};

module.exports = { findUserByEmail, insertUser, showAllUsers };
