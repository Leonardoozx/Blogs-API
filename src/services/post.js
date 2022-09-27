const { BlogPost, User, PostCategory, Category } = require('../models');

const userServices = require('./user');

const insertPost = async ({ title, content, categoryIds }, email) => {
  const {
    dataValues: { id: userId },
  } = await userServices.findUserByEmail(email);
  const date = new Date();
  const newPost = await BlogPost.create({
    title,
    content,
    userId,
    published: date,
    updated: date,
  });
  categoryIds.forEach(async (categoryId) => {
    await PostCategory.create({ postId: newPost.dataValues.id, categoryId });
  });
  return newPost;
};

const showAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return allPosts;
};

module.exports = { insertPost, showAllPosts };
