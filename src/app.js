const path = require('path')
const express = require('express')
const geocode = require('./utils/geocode.js')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000
//define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
//views is the default folder hbs looks for if you want to use a a different folder do then set it explicitly
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handledbars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', { title: 'Weather', name: 'MVS' })
})
app.get('/about', (req, res) => {
    res.render('about', { title: 'About me', name: 'MVS' })
})
app.get('/help', (req, res) => {
    res.render('help', { title: 'Help page', name: 'MVS' })
})
app.get('/random', (req, res) => {
    res.send({ info: "random render" })
})
app.get('/weather', (req, res) => {
    try {
        console.log(req.query.city);
        const weatherData = geocode.geocodeFinder(req.query.city, geocode.weatherFinder, (weatherData) => {
            console.log('weatherData', weatherData)
            res.send(weatherData)
        })
    }
    catch (error) {
        res.send(error)
        console.error(error)
    }
})

app.get('/help/*', (req, res) => {
    res.render('help404Page', { pageHeader: 'Help Header', pageFooter: 'Help Footer' })
})
app.get('*', (req, res) => {
    res.render('404Page', { pageHeader: 'Header', pageFooter: 'Footer' })
})
app.listen(port, () => {
    console.log('server started on port ' + port)
})
