const express = require('express');

const router = express.Router();

const postControllers = require('../controllers/post');
const verifyToken = require('../middlewares/verifyToken.middleware');
const postMiddlewares = require('../middlewares/post.middleware');

router.use(verifyToken);

router.post(
  '/',
  postMiddlewares.verifyFields,
  postMiddlewares.verifyCategory,
  postControllers.insertPost,
);

router.get('/', postControllers.showAllPosts);

router.get('/:id', postControllers.showPostById);

module.exports = router;
