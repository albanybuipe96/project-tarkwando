const NewsItem = require('../models/NewsModel')

module.exports = {
    index: (req, res) => {
        NewsItem.find().populate('news').then( items => {
            res.render('admin/index', { items })
        })
        // res.render('admin/index')
    },

    posts: (req, res) => {

    },

    compose: (req, res) => {

        const newsItem = new NewsItem({
            title: req.body.title,
            content: req.body.content
        })

        newsItem.save().then( item => {
            console.log(item)
            res.redirect('/admin')  
        })
        // console.log('composing news')
    }
}