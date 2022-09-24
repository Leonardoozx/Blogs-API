require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const login = async ({ body }, res) => {
    const jwtConfig = { algorithm: 'HS256' };

    const token = jwt.sign({ data: { userId: body.email } }, secret, jwtConfig);

    res.status(200).json({ token });
};
module.exports = { login };
