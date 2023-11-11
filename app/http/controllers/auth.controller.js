const { validationResult } = require("express-validator");
const { hashString } = require("../../modules/functions");
const { UserModel } = require("../../models/user");

class AuthContorller {
  async register(req, res, next) {
    try {
      const { username, password, firstName, lastName } = req.body;
      const hash_password = hashString(password);
      let user = null;
      user = await UserModel.create({
        first_name: firstName,
        last_name: lastName,
        username,
        password: hash_password,
      }).catch((error) => {
        if (error?.code == 11000) {
          throw { status: 400, message: "Dupplicate username!" };
        }
      });
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
  login() {}
}

module.exports = {
  AuthContorller: new AuthContorller(),
};
