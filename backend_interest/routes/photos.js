var express = require('express');
var router = express.Router();
const { getAllPhotos } = require('../db/queries/photoQueries.js')


router.get('/', getAllPhotos);


module.exports = router;
