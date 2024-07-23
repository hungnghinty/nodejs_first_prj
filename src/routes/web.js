
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})


router.get('/hungdeptrai', (req, res) => {
    res.render('hungdeptrai', { title: 'Hey', message: 'Hello there!' })
})

module.exports = router;