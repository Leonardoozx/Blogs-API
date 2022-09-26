require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const createJWT = (value) => {
  const jwtConfig = { algorithm: 'HS256' };
  const token = jwt.sign({ data: { value } }, secret, jwtConfig);
  return token;
}; 

module.exports = createJWT;
