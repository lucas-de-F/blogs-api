const express = require('express');

const router = express.Router();
const rescue = require('express-rescue');

const { userLogin } = require('../route/login/controller');
const validateLogin = require('../middlewares/validateLogin');

router.post('/', validateLogin, rescue(userLogin));

module.exports = router;
