const bcrypt = require("bcrypt");
function hashString(value) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(value, salt);
}

module.exports = {
  hashString,
};
