const { User } = require('../../../models');

const loginIsValid = (email, password) => User.findAll({
    where: {
        email,
        password,
    },
});

module.exports = { loginIsValid };
