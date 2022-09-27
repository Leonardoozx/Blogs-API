const { BlogPost, PostCategory } = require('../models');

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

module.exports = { insertPost };
