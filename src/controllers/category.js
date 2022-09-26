const categoryServices = require('../services/category');

const insertCategory = async ({ body }, res) => {
  if (!body.name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const newCategory = await categoryServices.insertCategory(body.name);
  res.status(201).json(newCategory);
};

const showAllCategories = async (_req, res) => {
  const allCategories = await categoryServices.showAllCategories();
  res.status(200).json(allCategories);
};

module.exports = { insertCategory, showAllCategories };
