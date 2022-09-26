const express = require('express');

const router = express.Router();

const categoryControllers = require('../controllers/category');
const verifyToken = require('../middlewares/verifyToken.middleware');

router.use(verifyToken);

router.post('/', categoryControllers.insertCategory);

router.get('/', categoryControllers.showAllCategories);

module.exports = router;
