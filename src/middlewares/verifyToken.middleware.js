require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const verifyToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decodedToken = jwt.verify(token, secret);
    req.authorization = decodedToken.data.email;
  } catch (e) {
    return res.status(401).json({ message: `Expired or ${e}` });
  }
  next();
};

module.exports = verifyToken;
