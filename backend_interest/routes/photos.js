var express = require('express');
var router = express.Router();
const { getAllPhotos, getSinglePhoto, getAllPhotosForAUser, updatePhoto, createPhoto } = require('../db/queries/photoQueries.js')


router.get('/', getAllPhotos);
router.get('/:id', getSinglePhoto);
router.get('/user/:id',getAllPhotosForAUser )
router.patch('/:id',updatePhoto)
router.post('/', createPhoto)


module.exports = router;
