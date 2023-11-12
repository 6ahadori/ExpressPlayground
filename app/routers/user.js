const { UserController } = require("../http/controllers/user.controller");
const {
  checkAuthorization,
} = require("../http/middlewares/checkAuthorization");
const { expressValidatorMapper } = require("../http/middlewares/checkErrors");
const { searchValidator } = require("../http/validations/user");

const router = require("express").Router();

router.post(
  "/search",
  checkAuthorization,
  searchValidator(),
  expressValidatorMapper,
  UserController.search
);

module.exports = {
  userRoutes: router,
};
