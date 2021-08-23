const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/role");
const Admin = require("../middleware/admin");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

router.post("/registerRole" , Auth, ValidateUser, Admin, RoleController.registerRole);
router.get("/listRole" , Auth, ValidateUser, Admin, RoleController.listRole);
router.put("/updateRole" ,Auth, ValidateUser, Admin,  RoleController.updateRole);

module.exports = router;