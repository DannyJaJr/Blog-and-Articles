

const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models')


//////step 3
router.get('/',  isLoggedIn,  async (req, res) => {
    // grab all the articles from the databse
    const grabDreams = await db.dream.findAll()
    ///now render them to the second page named index.ejs
    //   and send  the result as grab article
    res.render('dreams/index', { dreams: grabDreams });

})







////step 1
router.get('/new', isLoggedIn, (req, res) => {
    //to go render on the new.ejs page as the first display
    res.render('dreams/new')
})



///step 4
router.delete('/:idx', isLoggedIn,async (req, res) => { // const deleteArticle = await db.article.destroy({
    // console.log("You are here")
    const deleteDream = await db.dream.destroy({
        where: {
            id: req.params.idx
        }
    })
    console.log(deleteDream)
    res.redirect('/dreams')
})






////step 2
router.post('/',isLoggedIn, async (req, res) => {
    //test data from req.body
    const { category, date, description } = req.body
    console.log(category, date, description);
    const newDream = await db.dream.create({ category, date, description })
    // /to redirect the result to dreams page
    console.log(newDream)
    res.redirect('/dreams')
})





module.exports = router;










