const { body } = require("express-validator");

function registerValidator() {
  return [
    body("username").custom((value, ctx) => {
      if (!value) throw "Username can not be empty.";
      const usernameRegex = /^[a-z][a-z0-9\_]{2,}/gi;
      if (!usernameRegex.test(value)) throw "Username is not valid";
      return true;
    }),
    body("password")
      .isLength({ min: 6, max: 16 })
      .withMessage("Password length should be between 6 - 16 chars"),
    body(" "),
  ];
}

module.exports = {
  registerValidator,
};
