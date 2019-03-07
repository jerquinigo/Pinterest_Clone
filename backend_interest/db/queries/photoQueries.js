const { db } = require('../index.js')


const getAllPhotos = (req,res,next) => {
  db.any("SELECT * FROM pins")
  .then(pins => {
    res.status(200).json({
      status: "success",
      pins: pins,
      message: "recieved all photos"
    })
  })
  .catch(err => next(err))
}




const getSinglePhoto = (req,res,next) => {
  let pinId = parseInt(req.params.id);
  db.one("SELECT * FROM pins WHERE id=$1", pinId)
  .then(pin => {
    res.status(200).json({
      status: "success",
      pin:pin,
      message: "Recieved One pin"
    })
  })
  .catch(err => next(err));
}

const getAllPhotosForAUser =
// select * from pins where user_id = $1
// select * from pins where user_board_id = $1
 (req,res,next) => {
  let userId = parseInt(req.params.id);
  db.any("SELECT * FROM pins WHERE user_id=$1", [userId])
  .then(pin => {
    res.status(200).json({
      status:"success",
      pin:pin,
      message: "all Pins for one user"
    })
  })
  .catch(err => next(err))
}

const updatePhoto = (req,res,next) => {
  db.none("UPDATE pins SET title=${title}, description=${description}, category=${category}, imgUrl=${imgUrl} where id=${id}",
  {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    imgUrl: req.body.imgUrl,
    id: parseInt(req.params.id)
  }
).then(() => {
  res.status(200).json({
    status: "success",
    message: "updated a pin"
  })
})
.catch(err => next(err));

}

const createPhoto = (req,res,next) => {
let board = parseInt(req.body.user_board_id)
  let userId = parseInt(req.body.user_id)
  db.one("INSERT INTO pins(title,description,category,imgUrl,user_board_id,user_id) VALUES(${title}, ${description}, ${category},${imgUrl}, ${user_board_id},${user_id}) RETURNING imgUrl",
  {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    imgUrl: req.body.imgUrl,
    user_board_id: board,
    user_id: userId

  }

)
.then(pin => {
  res.status(200).json({
    status: "success",
    pin:pin,
    message: "added a new pin"
  })
})
.catch(err => next(err))
}

// const createPhoto = (req,res,next) => {
//   db.none("INSERT INTO pins(title,description,category,imgUrl)")
// }



//still needs to be done
//1 delete a photo
//2 create a photo by userid


module.exports = {
  getAllPhotos, getSinglePhoto, getAllPhotosForAUser, updatePhoto, createPhoto
}
