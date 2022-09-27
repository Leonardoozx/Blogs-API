const { BlogPost, User, PostCategory, Category } = require('../models');

const userServices = require('./user');

const insertPost = async ({ title, content, categoryIds }, email) => {
  const user = await userServices.findUserByEmail(email);
  const date = new Date();
  const newPost = await BlogPost.create({
    title,
    content,
    userId: user.id,
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

const showPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  if (!post) {
    return {
      type: 'POST NOT FOUND',
      status: 404,
      message: 'Post does not exist',
    };
  }
  return { type: null, status: 200, message: post };
};

const updatePostById = async ({ title, content }, id) => {
  const updatePostId = await BlogPost.update(
    { title, content, updated: new Date() },
    { where: { id } },
  );
  const updatedPost = await showPostById(updatePostId);
  return updatedPost.message;
};

const deletePostById = async (id) => {
  const deletedPost = await BlogPost.destroy({ where: { id } });
  return deletedPost;
};

module.exports = {
  insertPost,
  showAllPosts,
  showPostById,
  updatePostById,
  deletePostById,
};
