const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const Admin = require("../middleware/admin");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

router.post("/registerUser", UserController.registerUser);
router.post("/login", UserController.login);
router.post(
  "/registerAdmin",
  Auth,
  ValidateUser,
  Admin,
  UserController.registerAdmin
);
router.get(
  "/listUser/:name?",
  Auth,
  ValidateUser,
  Admin,
  UserController.listUser
);
router.put("/updateUser", Auth, ValidateUser, Admin, UserController.updateUser);
router.put("/deleteUser", Auth, ValidateUser, Admin, UserController.deleteUser);

module.exports = router;
