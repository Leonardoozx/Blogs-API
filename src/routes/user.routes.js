const express = require('express');

const userControllers = require('../controllers/user');
const userMiddlewares = require('../middlewares/user.middleware');

const router = express.Router();

router.post(
  '/',
  userMiddlewares.verifyNameAndPass,
  userMiddlewares.verifyEmail,
  userControllers.insertUser,
);

module.exports = router;
