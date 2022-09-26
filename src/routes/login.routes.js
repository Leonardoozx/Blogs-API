const express = require('express');

const router = express.Router();

const loginControllers = require('../controllers/login');
const loginMiddlewares = require('../middlewares/login.middleware');

router.post(
  '/',
  loginMiddlewares.verifiesIfEmailAndPassExists,
  loginMiddlewares.verifyEmailAndPass,
  loginControllers.login,
);

module.exports = router;
