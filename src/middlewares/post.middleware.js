const categoryServices = require('../services/category');
const userServices = require('../services/user');
const postServices = require('../services/post');

const verifyInsertFields = (
  { body: { title, content, categoryIds } },
  res,
  next,
) => {
  if (title === '' || content === '' || categoryIds.length === 0) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }
  next();
};

const verifyCategory = async ({ body: { categoryIds } }, res, next) => {
  const allCategories = [];
  await Promise.all(
    categoryIds.map(async (categoryId) => {
      const category = await categoryServices.findCategoryById(categoryId);
      allCategories.push(category);
    }),
  );
  if (allCategories.some((category) => category === null)) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

const authorizeUser = async ({ params, authorization }, res, next) => {
  const user = await userServices.findUserByEmail(authorization);
  const { message: post } = await postServices.showPostById(+params.id);
  if (user.id !== post.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

const verifyUpdateFields = ({ body }, res, next) => {
  if (body.title === '' || body.content === '') {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }
  next();
};

const verifyIfPostExists = async ({ params }, res, next) => {
  const { type } = await postServices.showPostById(+params.id);
  if (type) return res.status(404).json({ message: 'Post does not exist' });
  next();
};

module.exports = {
  verifyInsertFields,
  verifyCategory,
  authorizeUser,
  verifyUpdateFields,
  verifyIfPostExists,
};
