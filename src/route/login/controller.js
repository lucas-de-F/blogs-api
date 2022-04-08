const service = require('./service');

const userLogin = async (req, res) => {
    const payload = req.body;

    await service.verifyField(payload);

    const createToken = await service.createToken(payload);

    res.status(200).send(createToken);
};

module.exports = { userLogin };