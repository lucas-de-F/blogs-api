const express = require('express');

const router = express.Router();
const rescue = require('express-rescue');
const { validateCategorieName } = require('../middlewares/validateCategorie');
const validateToken = require('../middlewares/validateToken');
const { postCategorie, getCategories } = require('../route/categories/controller');

router.post('/', validateToken, validateCategorieName, rescue(postCategorie));
router.get('/', validateToken, rescue(getCategories));

module.exports = router;
