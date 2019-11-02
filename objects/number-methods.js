

let makeGuess = function (guess) {

    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNum)
    console.log(guess)
    return guess === randomNum

}
console.log(makeGuess(1))

// if it's correct you get true or false

