const { db } = require('../index.js')


const getAllPhotos = (req,res,next) => {
  db.any("SELECT * FROM photo_master_table")
  .then(pins => {
    res.status(200).json({
      status: "success",
      pins: pins,
      message: "recieved all photos"
    })
  })
  .catch(err => next(err))
}


module.exports = {
  getAllPhotos
}
