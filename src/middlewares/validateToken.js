const jwt = require('jsonwebtoken');
const service = require('../route/User/service');

const { JWT_SECRET } = process.env;

const validateToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    try {
      const { email } = jwt.verify(token, JWT_SECRET, { algorithm: 'HS256' });
      const user = await service.getUserByEmail(email);

      req.user = { user };
      return next();
    } catch (e) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = validateToken;
