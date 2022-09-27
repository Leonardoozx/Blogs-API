const categoryServices = require('../services/category');

const verifyFields = ({ body: { title, content, categoryIds } }, res, next) => {
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

module.exports = { verifyFields, verifyCategory };
