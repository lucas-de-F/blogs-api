const service = require('./service');

const InsertUser = async (req, res) => {
    const payload = req.body;

    await service.verifyEmail(payload);

    const createToken = await service.createToken(payload);
    await service.createUser(payload);

    res.status(201).json(createToken);
};

const getAllUsers = async (req, res) => {
   const allUsers = await service.getAllUsers();

   res.status(200).json(allUsers);
};

const getUserById = async (req, res) => {
   const id = req.params;

   const users = await service.getUserById(id);

   res.status(200).json(users);
};

module.exports = { InsertUser, getAllUsers, getUserById };
