const postServices = require('../services/post');

const insertPost = async ({ body, authorization }, res) => {
  const newPost = await postServices.insertPost(body, authorization);
  res.status(201).json(newPost);
};

const showAllPosts = async (_req, res) => {
  const allPosts = await postServices.showAllPosts();
  res.status(200).json(allPosts);
};

module.exports = { insertPost, showAllPosts };