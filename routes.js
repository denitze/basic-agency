const express = require('express');
const router = express.Router()
const news = require('./news.json')
const featuredNews = require('./featured-news.json')
const thinking = require('./thinking.json')
const icons = require('./icons.json')



router.get('/', (req,res) => {
    res.render('index', {title: "Home", icons, featuredNews})
})

router.get('/work', (req,res) => {
    res.render('work', {title: "Work"})
})

router.get('/about', (req,res) => {
    res.render('about', {title: "About"})
})

router.get('/news', (req,res) => {
    res.render('news', {title: "News",news})
})

router.get('/thinking', (req,res) => {
    res.render('thinking', {title: "Thinking",thinking})
})


router.get('/contact', (req,res) => {
    res.render('contact', {title: "Contact"})
})



module.exports = router