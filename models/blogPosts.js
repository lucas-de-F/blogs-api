const BlogPost = (sequelize, DataTypes) => {
    const BlogsPost = sequelize.define(
        'BlogPost', {
            title: DataTypes.STRING,
            userId: DataTypes.NUMBER,
            content: DataTypes.STRING,
            published: DataTypes.DATE,
            updated: DataTypes.DATE,
        }, {
            timestamps: false,
        },
    );

    BlogsPost.associate = (models) => {
        BlogsPost.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    };

    return BlogsPost;
};

module.exports = BlogPost;