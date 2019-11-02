let tempConvert = function (fahrenheit) {

    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit - 32) * 5 / 9 + 273.15
    }
}

let temps = tempConvert(74)

// how to return the object isself
console.log(temps)

