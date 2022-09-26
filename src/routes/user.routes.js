const express = require('express');

const userControllers = require('../controllers/user');
const userMiddlewares = require('../middlewares/user.middleware');
const verifyToken = require('../middlewares/verifyToken.middleware');

const router = express.Router();

router.get('/', verifyToken, userControllers.showAllUsers);

router.get('/:id', verifyToken, userControllers.showUserById);

router.post(
  '/',
  userMiddlewares.verifyNameAndPass,
  userMiddlewares.verifyEmail,
  userControllers.insertUser,
);

module.exports = router;
