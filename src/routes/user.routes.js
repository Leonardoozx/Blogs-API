const express = require('express');

const userControllers = require('../controllers/user');
const userMiddlewares = require('../middlewares/user.middleware');
const verifyToken = require('../middlewares/verifyToken.middleware');

const router = express.Router();

router.use(verifyToken);

router.get('/', userControllers.showAllUsers);

router.get('/:id', userControllers.showUserById);

router.post(
  '/',
  userMiddlewares.verifyNameAndPass,
  userMiddlewares.verifyEmail,
  userControllers.insertUser,
);

router.delete('/me', userControllers.deleteMyUser);

module.exports = router;
