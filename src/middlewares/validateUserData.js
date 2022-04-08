const validator = require('email-validator');
const erro = require('./errorMiddleware/throwDicinonary');

const validateEmail = ({ email }) => {
    if (validator.validate(email)) return;

    if (!email) throw erro.fieldIsRequired('email');
    throw erro.InvalidEmail;
};

const validateName = ({ displayName = '' }) => {
    if (displayName.length >= 8) return;

    throw erro.InvalidName;
};

const validatePassword = ({ password }) => {
    if (password === undefined) throw erro.fieldIsRequired('password');
    if (password.length === 6) return;

    throw erro.InvalidPassword;
};

const validateUserData = (req, res, next) => {
    const payload = req.body;

    validateEmail(payload);
    validateName(payload);
    validatePassword(payload);

    next();
};

module.exports = validateUserData;