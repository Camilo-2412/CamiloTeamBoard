const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

router.post("/registerUser" , UserController.registerUser);
router.post("/login" , UserController.login);
router.post("/registerAdmin" , UserController.registerAdmin);
router.get("/listUser" , UserController.listUser);
router.put("/updateUser" , UserController.updateUser);
router.put("/deleteUser" , UserController.deleteUser);

module.exports = router;