const express = require('express');
const rescue = require('express-rescue');

const validateToken = require('../middlewares/validateToken');
const { validateblogPost } = require('../middlewares/validateblogPost');
const { blogPost, getPost } = require('../route/blogPost/controller');

const router = express.Router();

router.post('/', validateToken, validateblogPost, rescue(blogPost));
router.get('/', validateToken, rescue(getPost));

module.exports = router;
