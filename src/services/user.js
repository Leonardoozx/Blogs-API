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
  const usersArrWithoutPass = allUsers.map(
    ({ id, displayName, email, image }) => ({
      id,
      displayName,
      email,
      image,
    }),
  );
  return usersArrWithoutPass;
};

const showUserById = async (userId) => {
  const userById = await User.findOne({ where: userId });
  if (!userById) {
    return {
      type: 'USER NOT FOUDN',
      status: 404,
      message: 'User does not exist',
    };
  }
  delete userById.dataValues.password;
  return { type: null, status: 200, message: userById };
};

module.exports = { findUserByEmail, insertUser, showAllUsers, showUserById };
