const router = require("express").Router();

const {
  getUser,
//   getSingleUser,
//   createUser,
//   updateUser,
//   deleteUser,
//   addFriend,
//   deleteFriend,
} = require("../../controllers/userController");

// /api/users GET all and POST
router.route("/").get(getUser);

module.exports = router;