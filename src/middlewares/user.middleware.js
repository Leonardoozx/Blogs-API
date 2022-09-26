const userServices = require('../services/user');

const verifyNameAndPass = ({ body }, res, next) => {
  const displayNameLength = (body.displayName).length >= 8;
  if (!displayNameLength) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  const passLength = (body.password).length >= 6;
  if (!passLength) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  next();
};

const verifyEmail = async ({ body }, res, next) => {
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValidation = emailReg.test(body.email);
  const validateUser = await userServices.findUserByEmail(body.email);
  if (!emailValidation) return res.status(400).json({ message: '"email" must be a valid email' });
  if (validateUser) return res.status(409).json({ message: 'User already registered' });
  next();
};

module.exports = { verifyNameAndPass, verifyEmail };
