
const express = require('express');
const router = express.Router();
const axios = require('axios');
const { text } = require('express');
// const passport = require('../config/ppConfig');











// //////step 3
// router.get('/', async (req, res) => {
//     // grab all the articles from the databse
//     const grabJournal = await db.journal.findAll()
//     // const grabArticles = await db.article.find().sort({createdAt: 'desc'})
//     //   console.log(grabArticles);
//     ///now reder them to the second page named index.ejs
//     //   and send  the result as grab article
//     res.render('journal/index', { journals: grabJournal });

// })









router.get('/new', (req, res)=> {
    res.render('journal/new')
});


router.get('/', async (req, res)=>{
    //   const apiKey  = "45f83ad2f86c44d68541ee28cd465ddf"
    // let topic = input.value;
    // let topic= req.query.search
    // let topic = req.query.body

    
    let url = "https://official-joke-api.appspot.com/random_joke"
    const result = await axios.get(url)
    console.log(result)
    // const data = result.data.articles 
    // const description = result.data.articles.description
    // const title = result.data.articles.title
    // console.log(data[0])
    // res.send("we right here")
    // res.render('/journal/index', {
    //     title:text,
    //     description: description
    // })
    // .catch((error) => res.status(400).render("404"));
})

// router.get('/', function(res, req){
//     let url = "hl-joke-api.appspot.com/random_jokettps://officia"
//    axios.get(url).then(response => {
//        let articles = response.data.results
//        res.render('index', {articles: articles.slice(0, 20)})
//    })
// })






// ////step 2
// router.post('/', async (req, res) => {
//     //test data from req.body
//     const { title, description } = req.body
//     console.log(title, description);
//     const newJournal = await db.journal.create({ title, description })
//     console.log(newJournal);
//     // /to redirect the result to articles page
//     res.redirect('/journal')
// })


















    // const seaarform = document.querySelector(".search")
    // const input = document.querySelector(".input")
    // const newList = document.querySelector(".class-list")

   

    
    // searchFrom.addEventListener('submit', retrieve)
    
    // function retrieve(e) {
    //     e.preventDefault()
    
    // const apiKey  = "45f83ad2f86c44d68541ee28cd465ddf"
    // let topic = input.value;
    
    // let url = `https://newsapi.org/v2/everything?q=${topic}&from=2021-05-19&to=2021-05-19&sortBy=popularity&apiKey=${apiKey}`
    
    // // fetch(url).then((res)=> {
    // //     return res.json()
    // // }).then((data)=>{
    // //     console.log(data)
    //     data.articles.forEach(article =>{
    //       let li =  document.createElement("li")
    //       let  a = document.createElemnt ('a)
    /////////a.setAttributes[href , articles.url]
    /////////a.setAttributes[target, black ]
            //a. setAttributes = textcontent.title;
    //         li append child a
    // //     })
    // })
    
    // // }
    







   
  














module.exports = router;