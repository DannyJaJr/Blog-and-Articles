
const express = require('express');
const router = express.Router();
// const passport = require('../config/ppConfig');
const db = require('../models')


//////step 3
router.get('/', async (req, res) => {
// grab all the articles from the databse
  const grabArticles = await db.article.findAll()
//   console.log(grabArticles);


  ///now reder them to the second page named index.ejs
//   and send  the result as grab article
  res.render('articles/index', { articles: grabArticles });
  
})




////step 1
router.get('/new', (req, res) => {
    //to go render on the new.ejs page as the first display
    res.render('articles/new')
})


////step 2
router.post('/', async (req, res) => {
    //test data from req.body
    const { title, date, description } = req.body
    console.log(title, date, description);
    // console.log(req.body)

    const newArticle = await db.article.create({ title, date, description })
    console.log(newArticle);
    // /to redirect the result to articles page
    res.redirect('/articles')
})















module.exports = router;