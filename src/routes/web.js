const express = require('express');
const router = express.Router();
const {getHomePage,getHungdeptraiPage} = require('../controllers/homeController')

router.get('/', getHomePage)


router.get('/hungdeptrai', getHungdeptraiPage )

module.exports = router;