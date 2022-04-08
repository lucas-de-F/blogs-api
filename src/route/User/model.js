const { User } = require('../../../models');

const getEmail = (email) => User.findAll({
    where: {
        email,
    },
});

const createUser = ({ ...obj }) => User.create(obj);

const getUsers = async () => {
    const allUsers = await User.findAll({
        raw: true,
        attributes: ['id', 'displayName', 'email', 'image'],
    });

    return allUsers;
};

const getUserById = async (id) => {
    const user = await User.findByPk(id, { attributes: ['id', 'displayName', 'email', 'image'] });

    return user;
};

const getUserByEmail = async (email) => {
    const user = await User.findOne({
        where: { email },
        attributes: ['id', 'displayName', 'email', 'image'],
        raw: true,
    });

    return user;
};

module.exports = { getUserByEmail, getUserById, getUsers, getEmail, createUser };