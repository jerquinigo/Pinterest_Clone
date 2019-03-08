var express = require('express');
var router = express.Router();
const {   getAllBoards,
  getAllBoardsForSingleUser,
  createNewBoard, getPinsByBoardId } = require('../db/queries/boardQueries.js');


  router.get("/",getAllBoards)
  router.get("/:id", getAllBoardsForSingleUser)
  router.post("/", createNewBoard )
  router.get("/pins/:id", getPinsByBoardId)


  module.exports = router;
