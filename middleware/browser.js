const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const createToken = async (req, res, next) => {
  try {
    const token = await jwt.sign({ browserUser: process.env.STRING_AUTH || 'yep' }, secret, {
      expiresIn: '1h',
    });
    console.log(token);
    console.log(jwt.verify(token, secret));
    req.token = token;
    next();
  } catch (error) {
    console.log(error);
    res.send('something went wrong');
  }
};

const checkToken = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    tokenData = await jwt.verify(token, secret);
    console.log(tokenData);
    if (
      !tokenData ||
      Date.now() > tokenData.exp * 1000 ||
      tokenData.browserUser !== process.env.STRING_AUTH ||
      'yep'
    )
      throw { error: 'unouthorized' };
    next();
  } catch (error) {
    res.send(error.message || error);
  }
};

module.exports = { checkToken, createToken };
