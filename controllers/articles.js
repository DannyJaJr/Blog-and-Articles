
const express = require('express');
const router = express.Router();
// const passport = require('../config/ppConfig');
const db = require('../models')


//////step 3
router.get('/', async (req, res) => {
    // grab all the articles from the databse
    const grabArticles = await db.article.findAll()
    // const grabArticles = await db.article.find().sort({createdAt: 'desc'})
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






// /step 4 create the show.ejs route for diaplay abd deleting
// router.get('/edit/:idx', async (req, res) => {
//     // console.log(req.params.idx)
//     // const grabArticle = await db.article.findOne({
//     //     where: {
//     //         id: req.params.idx
//     //     }
//     // })
//     // // ({ limit: 10, order: '"updatedAt" DESC' })
//     // res.render('articles/edit', { article: grabArticle });
//     // // if (grabArticle ==null) res.redirect("/")

  
// })



router.put('/edit/:idx', async (req, res) => {

    const grabArticleToedit = await db.article.findOne({
        where: {
            id: req.params.idx
        }
    })
    const newUpdate = await grabArticleToedit.update({
        title: req.body.updateTitle,
        date: req.body.updateDate,
        description: req.body.updateDescription
    })
    console.log(newUpdate)
    res.redirect("/articles")
    
})





// // / to complete the update route from edit/idx
// router.put('/:idx', async (req, res, next) => {
//     req.article = new Article()
//     next()
// }), saveArticlesAndRedirect('new')


// function saveArticlesAndRedirect(path) {
//     return async (req, res) => {
//         let article = req.article
//         article.title = req.body.title
//         article.date = req.body.date
//         article.description = req.body.description



//         // const { title, date, description } = req.body
//         // console.log(title, date, description);
//         const newArticle = await db.article.create({ title, date, description })
//         console.log(newArticle);
//         // /to redirect the result to articles page
//         res.redirect(`articles/${path}`)
//     }
// }











// step 5 delete routr
router.delete('/:idx', async (req, res) => { // const deleteArticle = await db.article.destroy({
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
router.post('/', async (req, res) => {
    //test data from req.body
    const { title, date, description } = req.body
    console.log(title, date, description);
    const newArticle = await db.article.create({ title, date, description })
    console.log(newArticle);
    // /to redirect the result to articles page
    res.redirect('/articles')
})















module.exports = router;