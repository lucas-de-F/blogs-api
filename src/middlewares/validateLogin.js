const validator = require('email-validator');
const erro = require('./errorMiddleware/throwDicinonary');

const validateEmail = ({ email }) => {
    if (email !== undefined && email.length === 0) throw erro.EmptyEmail;

    if (!email) throw erro.fieldIsRequired('email');
    if (validator.validate(email)) return;

    throw erro.InvalidEmail;
};

const validatePassword = ({ password }) => {
    if (password === '') throw erro.EmptyPassword;
    if (password === undefined) throw erro.fieldIsRequired('password');
    if (password.length === 6) return;

    throw erro.InvalidPassword;
};

const validateLogin = (req, res, next) => {
    const payload = req.body;

    validateEmail(payload);
    validatePassword(payload);

    next();
};

module.exports = validateLogin;