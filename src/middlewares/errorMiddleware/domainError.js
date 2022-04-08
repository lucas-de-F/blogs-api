module.exports = (err, _req, res, _next) => {
  const errorMap = {
    Conflit: 409,
    Unauthorized: 401,
    BadRequest: 400,
    NotFound: 404,
  };

  const status = errorMap[err.code];

  if (!status) {
    return res.status(500).json({ message: err.message });
    }

  res.status(status).json(err);
};
