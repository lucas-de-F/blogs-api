const model = require('./model');

const postCategorie = (categorieName) => model.postCategorie(categorieName);

const getCategories = () => model.getCategories();

module.exports = { postCategorie, getCategories };
