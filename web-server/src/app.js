const express = require('express')
const path = require('path')
const hbs = require('hbs')

// Create an Express app
const app = express()

// Define paths for express configs
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up handlebars engine and views path
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDir))

app.get('/', (req, res) => {
    res.render('index', {
        title: "Weather",
        name: "Dharan"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: "Some usefull text",
        title: "Help",
        name: "Dharan"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About me",
        name: "Dharan"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: "Chennai",
        weather: 32
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        title: "Error",
        name: "Dharan",
        errorText: "Help article not found"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: "404",
        name: "Dharan",
        errorText: "Page not found"
    })
})

app.listen(3000, () => {
    console.log("Server is running...")
})