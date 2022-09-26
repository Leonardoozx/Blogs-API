const userServices = require('../services/user');

const verifiesIfEmailAndPassExists = ({ body }, res, next) => {
  if (!body.email || !body.password) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  next();
};

const verifyEmailAndPass = async ({ body }, res, next) => {
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValidation = emailReg.test(body.email);
  const validateUser = await userServices.findUserByEmail(body.email);
  if (!validateUser || body.email === '' || body.password === '' || !emailValidation) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

module.exports = { verifiesIfEmailAndPassExists, verifyEmailAndPass };
