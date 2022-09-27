const postServices = require('../services/post');

const insertPost = async ({ body, authorization }, res) => {
  const newPost = await postServices.insertPost(body, authorization);
  res.status(201).json(newPost);
};

const showAllPosts = async (_req, res) => {
  const allPosts = await postServices.showAllPosts();
  res.status(200).json(allPosts);
};

const showPostById = async ({ params }, res) => {
  const { type, status, message } = await postServices.showPostById(+params.id);
  if (type) return res.status(status).json({ message });
  res.status(status).json(message);
};

const updatePostById = async ({ body, params }, res) => {
  const updatedPost = await postServices.updatePostById(body, +(params.id));
  res.status(200).json(updatedPost);
};

const deletePostById = async ({ params }, res) => {
  await postServices.deletePostById(+params.id);
  res.status(204).send();
};

module.exports = {
  insertPost,
  showAllPosts,
  showPostById,
  updatePostById,
  deletePostById,
};
