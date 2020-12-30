const express = require('express');
const router = express.Router()
const news = require('./news.json')
const featuredNews = require('./featured-news.json')
const thinking = require('./thinking.json')
const icons = require('./icons.json')



router.get('/', (req,res) => {
    res.render('index', {title: "Basic Home", icons, featuredNews})
})

router.get('/work', (req,res) => {
    res.render('work', {title: "Basic Work"})
})

router.get('/about', (req,res) => {
    res.render('about', {title: "Basic About"})
})

router.get('/news', (req,res) => {
    res.render('news', {title: "Basic News",news})
})

router.get('/thinking', (req,res) => {
    res.render('thinking', {title: "Basic Thinking",thinking})
})


router.get('/contact', (req,res) => {
    res.render('contact', {title: "Basic Contact"})
})


router.get('/aside', (req,res) => {
    res.render('aside', {title: "Basic Aside"})
})


module.exports = router