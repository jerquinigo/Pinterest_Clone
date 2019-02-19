var express = require('express');
var router = express.Router();
const { getAllPhotos, getSinglePhoto, getAllPhotosForAUser, updatePhoto } = require('../db/queries/photoQueries.js')


router.get('/', getAllPhotos);
router.get('/:id', getSinglePhoto);
router.get('/:id/user',getAllPhotosForAUser )
router.patch('/:id',updatePhoto)


module.exports = router;
