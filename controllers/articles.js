
const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models')





//////step 3
router.get('/', isLoggedIn, async (req, res) => {
    // grab all the articles from the databse
    const grabArticles = await db.article.findAll()
    // const grabArticles = await db.article.find().sort({createdAt: 'desc'})
    //   console.log(grabArticles);
    ///now reder them to the second page named index.ejs
    //   and send  the result as grab article
    res.render('articles/index', { articles: grabArticles });

})

////step 1 link to home page of the model
router.get('/new', isLoggedIn,(req, res) => {
    //to go render on the new.ejs page as the first display
    res.render('articles/new')
})




/// route to edit article
router.put('/edit/:idx',isLoggedIn, async (req, res) => {
     // grab one article from the database
    const grabArticleToedit = await db.article.findOne({
        where: {
            id: req.params.idx
        }
    })
    //update the mew varibale created 
    const newUpdate = await grabArticleToedit.update({
        title: req.body.updateTitle,
        date: req.body.updateDate,
        description: req.body.updateDescription
    })
    console.log(newUpdate)
    res.redirect("/articles")
    
})






// step 5 delete route
router.delete('/:idx', isLoggedIn,async (req, res) => { // const deleteArticle = await db.article.destroy({
    console.log("You are here")
    const deleteArticle = await db.article.destroy({
        where: {
            id: req.params.idx
        }
    })
    console.log(deleteArticle)
    res.redirect('/articles')
})






////step 2
router.post('/',isLoggedIn, async (req, res) => {
    //test data from req.body
    const { title, date, description } = req.body
    console.log(title, date, description);
    const newArticle = await db.article.create({ title, date, description })
    console.log(newArticle);
    // /to redirect the result to articles page
    res.redirect('/articles')
})








module.exports = router;