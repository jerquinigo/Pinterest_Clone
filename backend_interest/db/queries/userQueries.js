const { db } = require('../index.js')

const authHelpers = require("../../auth/helpers");

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

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db
    .one("SELECT * FROM users WHERE id=$1", userId)
    .then(user => {
      res.status(200).json({
        status: "success",
        user: user,
        message: "Received ONE USER!"
      });
    })
    .catch(err => next(err));
};

const updateUser = (req, res, next) => {
  db
    .none(
      "UPDATE users SET name=${name}, username=${username}, email=${email}, profile_pic_url=${profile_pic_url} WHERE id=${id}",
      {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        profile_pic_url: req.body.profile_pic_url,
        id: parseInt(req.params.id)
      }
    )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Updated a USER!"
      });
    })
    .catch(err => next(err));
};


const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db
    .result("DELETE FROM users WHERE id=$1", userId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "Removed a user",
        result: result
      });
    })
    .catch(err => next(err));
};

// const createUser = (req, res, next) => {
//   db
//     .none(
//       "INSERT INTO users(name, username, email, profile_pic_url) VALUES(${name}, ${username}, ${email}, ${profile_pic_url})",
//       req.body
//     )
//     .then(() => {
//       res.status(200).json({
//         status: "success",
//         message: "created new user "
//       });
//     })
//     .catch(err => next(err));
// };


function createUser(req, res, next) {
  const hash = authHelpers.createHash(req.body.password_digest);

  db.none(
    "INSERT INTO users (name, password_digest, username, email, profile_pic_url) VALUES (${name}, ${password_digest}, ${username}, ${email}, ${profile_pic_url})",
    {
      name: req.body.name,
      password_digest: hash,
      username: req.body.username,
      email: req.body.email,
      profile_pic_url: req.body.profile_pic_url

     }
  )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

function loginUser(req, res) {
  res.json(req.user);
}

function isLoggedIn(req, res) {
  if (req.user) {
    res.json({ username: req.user });
  } else {
    res.json({ username: null });
  }
}




module.exports = {
  getAllUsers, getSingleUser, updateUser, deleteUser, createUser, logoutUser, loginUser, isLoggedIn
}
