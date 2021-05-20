const express = require('express');
const router = express.Router();
// const passport = require('../config/ppConfig');
const db = require('../models')




//////step 3
router.get('/', async (req, res) => {
    // grab all the articles from the databse
    const grabDreams = await db.dream.findAll()
    ///now render them to the second page named index.ejs
    //   and send  the result as grab article
    res.render('deams/index', { dreams: grabDreams });

})


////step 1
router.get('/new', (req, res) => {
    //to go render on the new.ejs page as the first display
    res.render('dreams/new')
})



// // ///step 4 create the show.ejs route for diaplay abd deleting
// router.get('/:idx', async (req, res) => {
//     console.log(req.params.idx)
//     const grabDream = await db.dream.findOne({
//         where: {
//             id: req.params.idx
//         }
//     })
//     // ({ limit: 10, order: '"updatedAt" DESC' })
//     res.render('dreams/show', { article: grabDream });
// })





// // step 5 delete routr
// router.delete('/:idx', async (req, res) => { // const deletedream = await db.dream.destroy({
//     console.log("You are awake")
//     const deleteDream = await db.dream.destroy({
//         where: {
//             id: req.params.idx
//         }
//     })
//     console.log(deleteDream)
//     res.redirect('/dreams')
// })




// ////step 6 for edit 
// router.put('/:idx', async (req, res) => {
//     const EditDreams = await db.dream.update({
//         weher: {
//             id: req.params.idx
//         }
//     })
//     console.log(EditDreams)
//     res.redirect('/dreams')
   
// })  






////step 2
router.post('/', async (req, res) => {
    //test data from req.body
    const { category, date, description } = req.body
    console.log(category, date, description);
    const newDream = await db.dream.create({ category, date, description })
    // /to redirect the result to dreams page
    console.log(newDream)
    res.redirect('/dreams')
})




module.exports = router;





















// //////step 3
// router.get('/', async (req, res) => {
//     // grab all the articles from the databse
//     const grabArticles = await db.article.findAll()
//     // const grabArticles = await db.article.find().sort({createdAt: 'desc'})
//     //   console.log(grabArticles);
//     ///now reder them to the second page named index.ejs
//     //   and send  the result as grab article
//     res.render('articles/index', { articles: grabArticles });

// })

// ////step 1
// router.get('/new', (req, res) => {
//     //to go render on the new.ejs page as the first display
//     res.render('articles/new')
// })



// // ///step 4 create the show.ejs route for diaplay abd deleting
// router.get('/:idx', async (req, res) => {
//     console.log(req.params.idx)
//     const grabArticle = await db.article.findOne({
//         where: {
//             id: req.params.idx
//         }
//     })
//     // ({ limit: 10, order: '"updatedAt" DESC' })
//     res.render('articles/show', { article: grabArticle });
//     // if (grabArticle ==null) res.redirect("/")

// })


// // step 5 delete routr
// router.delete('/:idx', async (req, res) => { // const deleteArticle = await db.article.destroy({
//     console.log("You are here")
//     const deleteArticle = await db.article.destroy({
//         where: {
//             id: req.params.idx
//         }
//     })
//     console.log(deleteArticle)
//     res.redirect('/articles')
// })




////step 6 for edit 
// router.put('/:idx', async (req, res) => {
//     const EditArticle = await db.article.update({
//         weher: {
//             id: req.params.idx
//         }
//     })
//     console.log(EditArticle)
//     res.redirect('/articles')
   
// })  









// ////step 2
// router.post('/', async (req, res) => {
//     //test data from req.body
//     const { title, date, description } = req.body
//     console.log(title, date, description);
//     const newArticle = await db.article.create({ title, date, description })
//     console.log(newArticle);
//     // /to redirect the result to articles page
//     res.redirect('/articles')
// })


