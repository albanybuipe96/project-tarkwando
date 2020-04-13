const express = require('express')
const bodyParser = require('body-parser')
const { PORT, HOST } = require('./config/configuration')
const defaultRoute = require('./routes/default')
const adminRoute = require('./routes/admin')
const { DBURL } = require('./config/configuration')

const mongoose = require('mongoose')

mongoose.connect(DBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( res => console.log('Connected to DB successfully!'))
    .catch( err => console.error('Error connecting to DB!'))

const app = express()

// configuration for body parser
app.use(bodyParser.urlencoded({extended: true}))

// configuration for view engine and static files
app.set('view engine', 'ejs')
app.use(express.static('public'))

// default routes
app.use('/', defaultRoute)

// admin routes
app.use('/admin', adminRoute)

app.listen(PORT, () => console.log(`Listening at http://${HOST}:${PORT}/`))