const request = require('request')

weatherApi = {
    weatherFinder(error, coordinates, callback) {
        if (error) {
            console.log(`Error fetching weather info: ${error}`)
        }
        else {
            const url = "https://api.darksky.net/forecast/7b60a3c7af7c72051099a764a6088552/" + coordinates.latitude + ", " + coordinates.longitude + "?units=us"
            request({ url: url, json: true }, (error, response) => {
                if (error) {
                    console.log(error)
                }
                else if (response.body.error) {
                    console.log(response.body.error)
                }
                else {
                    const data = response.body
                    console.log(`WeatherInfo for the place: ${coordinates.place}, ${data.daily.data[0].summary} It's is currently ${data.currently.temperature}. There is a ${data.currently.precipProbability}% chance of rain`)
                    callback({ Units: "Fahrenheit", coordinates: coordinates, now: { temperature: data.currently.temperature, humidity: data.currently.humidity, windSpeed: data.currently.windSpeed }, summary: data.daily.data[0].summary, temperatureHigh: data.daily.data[0].temperatureHigh, temperatureLow: data.daily.data[0].temperatureLow, rainChance: data.daily.data[0].precipProbability + '%' })
                }
            })
        }
    },

    geocodeFinder(searchText, weatherFinder, callback) {
        try {
            const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(searchText) + ".json?access_token=pk.eyJ1IjoibWFkaHV2cyIsImEiOiJjazJ6ZDk0OGQwZ3MyM21zMWt0cnhqaXFiIn0.Nh-5FUCUD8Wg4xSamRg7vQ&limit=1"
            request({ url: geocodeUrl, json: true }, (error, response) => {
                if (error) {
                    console.log(error);
                    weatherFinder(error)
                }
                else if (response.body.message) {
                    console.log(response.body.message)
                    weatherFinder(response.body.message)
                }
                else if (response.body.error) {
                    console.log(response.body.error)
                }
                else {
                    const data = response.body
                    if(data.features && data.features.lenth > 0){
                    console.log(`Latitude and Longitude for the place ${data.features[0].place_name} are  ${data.features[0].center[1]} and ${data.features[0].center[0]}`)
                    const coordinates = { place: data.features[0].place_name, latitude: data.features[0].center[1], longitude: data.features[0].center[0] }
                    weatherFinder(null, coordinates, callback);
                    }
                    else {
                        callback({error: "Unable to find the location tried"})
                    }
                }
            })
        }
        catch (error) {
            console.error(error)
        }
    }

}
module.exports = weatherApi


