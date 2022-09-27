const express = require('express');

const router = express.Router();

const verifyToken = require('../middlewares/verifyToken.middleware');
const postControllers = require('../controllers/post');
const postMiddlewares = require('../middlewares/post.middleware');

router.use(verifyToken);

router.post(
  '/',
  postMiddlewares.verifyInsertFields,
  postMiddlewares.verifyCategory,
  postControllers.insertPost,
);

router.get('/', postControllers.showAllPosts);

router.get('/:id', postControllers.showPostById);

router.put(
  '/:id',
  postMiddlewares.authorizeUser,
  postMiddlewares.verifyUpdateFields,
  postControllers.updatePostById,
);

router.delete(
  '/:id',
  postMiddlewares.verifyIfPostExists,
  postMiddlewares.authorizeUser,
  postControllers.deletePostById,
);

module.exports = router;
