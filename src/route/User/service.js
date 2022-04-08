const jwt = require('jsonwebtoken');
const model = require('./model');
const erro = require('../../middlewares/errorMiddleware/throwDicinonary');

const verifyEmail = async ({ email }) => {
    const emailExist = await model.getEmail(email);

    if (emailExist.length === 1) throw erro.EmailAlreadyExists;
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

const createUser = async ({ displayName, email, password, image }) => {
    const obj = {
        displayName,
        email,
        password,
        image,
    };

    await model.createUser(obj);
};

const getAllUsers = async () => {
    const allUsers = await model.getUsers();

    return allUsers;
};

const getUserById = async ({ id }) => {
    const user = await model.getUserById(id);

    if (user === null) throw erro.UserNotFound;

    return user;
};

const getUserByEmail = async (email) => {
    const user = await model.getUserByEmail(email);

    if (user === null) throw erro.UserNotFound;

    return user;
};

module.exports = {
    getUserByEmail,
    getUserById,
    getAllUsers,
    createToken,
    verifyEmail,
    createUser,
};