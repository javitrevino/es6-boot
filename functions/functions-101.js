
let convertFahrenheitToCelsius = function (fahrenheit) {
    let result = (fahrenheit - 32) * 5 / 9
    return result
}

let todaysWeather = convertFahrenheitToCelsius(32)
let tomorrowsWeather = convertFahrenheitToCelsius(68)
console.log(todaysWeather)
console.log(tomorrowsWeather)