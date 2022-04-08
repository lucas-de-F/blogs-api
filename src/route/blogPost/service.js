const categoryModel = require('../categories/model');
const model = require('./model');
const erro = require('../../middlewares/errorMiddleware/throwDicinonary');

const verifyCategoryIds = async ({ categoryIds }) => {
    const findedIds = await Promise.all(categoryIds
        .map(async (categoryId) => categoryModel.getCategoryById(categoryId)));

    if (findedIds.includes(null)) throw erro.categoryIdsNotFound;
};

const createPost = async ({ title, content }, userId) => model.createPost({
    title,
    userId,
    content,
});

const postCategories = (postId, categoryArray) => {
    categoryArray.forEach(async (categoryId) => {
        await model.postsCategories(postId, categoryId);
    });
};

const getPost = async () => {
    const result = await model.getPosts();
    return result;
};

module.exports = { postCategories, getPost, verifyCategoryIds, createPost };