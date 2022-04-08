const express = require('express');

const router = express.Router();
const rescue = require('express-rescue');

const { InsertUser, getAllUsers, getUserById } = require('../route/User/controller');
const validateUserData = require('../middlewares/validateUserData');
const validateToken = require('../middlewares/validateToken');

router.post('/', validateUserData, rescue(InsertUser));
router.get('/', validateToken, rescue(getAllUsers));
router.get('/:id', validateToken, rescue(getUserById));

module.exports = router;
