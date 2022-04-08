const jwt = require('jsonwebtoken');
const model = require('./model');
const erro = require('../../middlewares/errorMiddleware/throwDicinonary');

const verifyField = async ({ email, password }) => {
    const loginIsValid = await model.loginIsValid(email, password);

    if (loginIsValid.length === 0) throw erro.InvalidFields;
};

const createToken = ({ email }) => {
    const jwtOptions = {
        algorithm: 'HS256',
        subject: email,
        expiresIn: '1h',
    };

    const payload = {
        email,
        isAdimin: false,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, jwtOptions);

    return { token };
};

module.exports = { verifyField, createToken };