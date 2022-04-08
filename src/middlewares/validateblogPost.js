const erro = require('./errorMiddleware/throwDicinonary');

const validateblogPost = (req, _res, next) => {
    const { title, content, categoryIds } = req.body;

    if (!title) throw erro.fieldIsRequired('title');
    if (!content) throw erro.fieldIsRequired('content');
    if (!categoryIds) throw erro.fieldIsRequired('categoryIds');
    if (categoryIds.length === 0) throw erro.fieldIsRequired('categoryIds');

    next();
};

module.exports = { validateblogPost };
