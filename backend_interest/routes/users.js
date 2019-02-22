var express = require('express');
var router = express.Router();
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers");
const { getAllUsers, getSingleUser, updateUser, deleteUser, createUser, logoutUser, loginUser, isLoggedIn } = require('../db/queries/userQueries.js')

/* GET users listing. */
router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.patch('/:id',updateUser);
router.delete('/:id',deleteUser);
router.post("/new", createUser);
router.post("/login", passport.authenticate("local"), loginUser);
router.get("/isLoggedIn", isLoggedIn);
router.post("/logout", loginRequired, logoutUser);




module.exports = router;
