const association = (models, PostsCategories) => {
    models.BlogPost.belongsToMany(models.Categorie, {
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'categories',
        through: PostsCategories,
    });
    models.Categorie.belongsToMany(models.BlogPost, {
        foreignKey: 'categoryId',
        otherKey: 'postId',
        as: 'posts',
        through: PostsCategories,
    });
};

const PostCategories = (sequelize, _DataTypes) => {
    const PostsCategories = sequelize.define(
        'PostsCategories', {}, {
            tableName: 'PostsCategories',
            timestamps: false,
        },
    );

    PostsCategories.associate = (models) => association(models, PostsCategories);
    return PostsCategories;
};

module.exports = PostCategories;