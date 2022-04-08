const service = require('./service');

// POST

const blogPost = async (req, res) => {
    const postData = req.body;
    const { user: { id } } = req.user;

    await service.verifyCategoryIds(postData);

    const post = await service.createPost(postData, id);
    await service.postCategories(post.id, postData.categoryIds);

    res.status(201).json(post);
};

// GET

const getPost = async (req, res) => {
    // const { user: { id } } = req.user;

    const posts = await service.getPost();
    // const getCategories = await service.getCategories(posts)
    res.status(200).json(posts);
};

module.exports = { blogPost, getPost };