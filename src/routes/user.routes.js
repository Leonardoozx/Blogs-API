const express = require('express');

const userControllers = require('../controllers/user');
const userMiddlewares = require('../middlewares/user.middleware');
const verifyToken = require('../middlewares/verifyToken.middleware');

const router = express.Router();

router.post(
  '/',
  verifyToken,
  userMiddlewares.verifyNameAndPass,
  userMiddlewares.verifyEmail,
  userControllers.insertUser,
);

module.exports = router;
