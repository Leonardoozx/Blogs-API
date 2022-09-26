const express = require('express');

const router = express.Router();

const categoryControllers = require('../controllers/category');
const verifyToken = require('../middlewares/verifyToken.middleware');

router.post('/', verifyToken, categoryControllers.insertCategory);

module.exports = router;
