import geocode from './utils/geocode.js'
import forecast from './utils/forecast.js'

const address = process.argv[2]

if (!address) {
    console.log("Please provide address")
} else {
    geocode(address)
        .then(location => forecast(location))
        .then(weather => console.log(weather))
        .catch(err => console.log(err))
}


// forecast(13.083694, 80.270186).then(res =>
//     console.log(res)
// ).catch(error => {
//     console.log(error, "err")
// })


