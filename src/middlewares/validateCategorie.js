const erro = require('./errorMiddleware/throwDicinonary');

const validateCategorieName = (req, _res, next) => {
    const { name } = req.body;

    if (!name) throw erro.fieldIsRequired('name');

    next();
};

module.exports = { validateCategorieName };
