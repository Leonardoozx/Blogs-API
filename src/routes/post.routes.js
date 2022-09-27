const express = require('express');

const router = express.Router();

const postControllers = require('../controllers/post');
const verifyToken = require('../middlewares/verifyToken.middleware');
const postMiddlewares = require('../middlewares/post.middleware');

router.post(
  '/',
  postMiddlewares.verifyFields,
  postMiddlewares.verifyCategory,
  verifyToken,
  postControllers.insertPost,
);

module.exports = router;
