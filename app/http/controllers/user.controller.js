const { UserModel } = require("../../models/user");

class UserController {
  async search(req, res, next) {
    const { query } = req.body;
    const users = await UserModel.find(
      {
        $or: [
          {
            first_name: new RegExp(`${query}`, "i"),
          },
          {
            last_name: new RegExp(`${query}`, "i"),
          },
        ],
      },
      { password: 0, __v: 0, createdAt: 0, updatedAt: 0 }
    );
    return res.status(200).json({
      status: res.statusCode,
      success: true,
      data: users,
    });
  }
}

module.exports = {
  UserController: new UserController(),
};
