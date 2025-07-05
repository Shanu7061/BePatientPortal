const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// router.use(verifyJWT)

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createNewUser);

router.get("/:id", usersController.getUserById);
module.exports = router;
