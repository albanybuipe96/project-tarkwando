// ./routes/default.js

const express = require('express')
const defaultController = require('../controllers/default')

const router = express.Router()

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'default'
    next()
})

router.route('/').get(defaultController.index)

router.route('/submit').get(defaultController.submit)

module.exports = router