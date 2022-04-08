const service = require('./service');

const postCategorie = async (req, res) => {
    const { name } = req.body;
    const post = await service.postCategorie(name);

    res.status(201).json(post);
};

const getCategories = async (req, res) => {
    const get = await service.getCategories();
    res.status(200).json(get);
};

module.exports = { postCategorie, getCategories };