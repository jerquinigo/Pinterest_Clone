const { db } = require('../index.js')


const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
  .then(users => {
    res.status(200).json({
      status: 'success',
      users: users,
      message: "Received all USERS!"
    })
  })
  .catch(err => next(err));
}


module.exports = {
  getAllUsers
}
