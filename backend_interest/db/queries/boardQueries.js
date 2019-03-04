const { db } = require("../index.js");

getAllBoards = (req, res, next) => {
  db.any("SELECT * FROM boards")
    .then(boards => {
      res.status(200).json({
        status: "success",
        boards: boards,
        message: "Received all boards"
      });
    })
    .catch(err => {
      return next(err);
    });
};

getAllBoardsForSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any(
    "SELECT * FROM boards JOIN pins ON boards.id=pins.id WHERE boards.user_id=$1",
    [userId]
  )
    .then(boards => {
      res.status(200).json({
        status: "success",
        boards: boards,
        message: "Received all boards for one user"
      });
    })
    .catch(err => {
      return next(err);
    });
};

createNewBoard = (req, res, next) => {
  db.one(
    "INSERT INTO boards(user_id,title) VALUES(${user_id}, ${title}) RETURNING title",
    {
      user_id: req.body.user_id,
      title: req.body.title
    }
  )
    .then(board => {
      res.status(200).json({
        status: "success",
        board: board,
        message: "created a new board"
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllBoards,
  getAllBoardsForSingleUser,
  createNewBoard
};
