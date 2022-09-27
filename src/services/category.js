const { Category } = require('../models');

const insertCategory = async (name) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

const showAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

const findCategoryById = async (id) => {
  const category = await Category.findOne({ where: id });
  return category;
};

module.exports = { insertCategory, showAllCategories, findCategoryById };