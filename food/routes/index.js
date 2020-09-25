const express = require('express');
// import data
const restaurants = require('../data');
const router = express.Router();
// Render Web
router.get('/', (req, res) => {
    res.render('main', { restaurants});
    // main.ejs and pass data to index page
});
module.exports = router;