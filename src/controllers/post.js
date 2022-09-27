const postServices = require('../services/post');

const insertPost = async ({ body, authorization }, res) => {
  const newPost = await postServices.insertPost(body, authorization);
  res.status(201).json(newPost);
};

module.exports = { insertPost };