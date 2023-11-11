const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function hashString(value) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(value, salt);
}

function tokenGenerator(payload) {
  return jwt.sign(payload, process.env.SECRET_KEY);
}

module.exports = {
  hashString,
  tokenGenerator,
};
