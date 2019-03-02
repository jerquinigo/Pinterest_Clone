var express = require('express');
var router = express.Router();
const {   getAllBoards,
  getAllBoardsForSingleUser,
  createNewBoard } = require('../db/queries/boardQueries.js');


  router.get("/",getAllBoards)
  router.get("/:id", getAllBoardsForSingleUser)
  router.post("/", createNewBoard )


  module.exports = router;
