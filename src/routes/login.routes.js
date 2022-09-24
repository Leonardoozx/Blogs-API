const express = require('express');

const router = express.Router();

const loginControllers = require('../controllers/login');
const loginMiddlewares = require('../middlewares/login.middlewares');

router.post(
  '/',
  loginMiddlewares.verifiesIfEmailAndPassExists,
  loginMiddlewares.verifyEmailAndPass,
  loginControllers.logIn,
);

module.exports = router;
