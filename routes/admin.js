const express = require('express')
const adminController = require('../controllers/admin')

const router = express.Router()

router.route('/*', (req, res, next) => {
    req.app.locals.layout = 'admin'
    next()
})

router.route('/').get(adminController.index)

router.route('/compose').post(adminController.compose)

module.exports = router