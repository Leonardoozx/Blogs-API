require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const createJWT = (email) => {
  const jwtConfig = { algorithm: 'HS256' };
  const token = jwt.sign({ data: { email } }, secret, jwtConfig);
  return token;
}; 

module.exports = createJWT;
