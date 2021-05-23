
const express = require('express');
const router = express.Router();
const axios = require('axios');
const { text } = require('express');
const passport = require('../config/ppConfig');
const isLoggedIn = require('../middleware/isLoggedIn');









router.get('/new',(req, res)=> {
    res.render('journal/new')
});

router.get('/', function(req, res) {
    axios.get("https://official-joke-api.appspot.com/random_joke")
    .then(function (response) {
        // console.log(response)
        res.render('journal/new', {randomJoke: response})
    })
})







module.exports = router;