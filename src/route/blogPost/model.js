const { Op } = require('sequelize');
const { BlogPost, User, PostsCategories, Categorie } = require('../../../models');

const createPost = async ({ title, userId, content }) => {
    const date = new Date();

    const post = await BlogPost.create({
        title,
        userId,
        content,
        published: date,
        updated: date,
    });

    return {
        id: post.id,
        userId,
        title,
        content,
    };
};

const postsCategories = async (postId, categoryId) => {
    PostsCategories.create({ postId, categoryId });
};

const getPosts = async () => {
    const findPosts = await BlogPost.findAll({
        include: [{
            model: User,
            as: 'user',
            attributes: {
                exclude: 'password',
            },
        }, {
            model: Categorie,
            as: 'categories',
            through: {
                attributes: [],
            },
        }],
    });
    return findPosts;
};

const getCategories = ({ postId }) => PostsCategories.findAll({
    attributes: ['postId', 'categoryId'],
    where: {
        postId: {
            [Op.eq]: postId,
        },
    },
});

module.exports = { postsCategories, getCategories, createPost, getPosts };