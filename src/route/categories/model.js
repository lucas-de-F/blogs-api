const { Categorie } = require('../../../models');

const postCategorie = (name) => Categorie.create({ name }, { raw: true });
// Outra maneira alternativa de obter obj adicionado
// const postCategorie = async (name) => (await Categorie.create({ name })).get({ plain: true })
// https://stackoverflow.com/questions/45563842/set-raw-true-on-sequelize-model-create

const getCategories = () => Categorie.findAll({ raw: true });

const getCategoryById = (id) => Categorie.findByPk(id, { raw: true });

module.exports = { postCategorie, getCategories, getCategoryById };
