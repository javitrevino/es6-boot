
const puzzleContent = document.querySelector('#puzzle')
const remainderContent = document.querySelector("#guesses")
const myGuess = new Hangman('Apple', 2)

puzzleContent.textContent = myGuess.puzzle
remainderContent.textContent = myGuess.status
console.log(myGuess.status)

window.addEventListener('keypress', function (e) {
    const character = String.fromCharCode(e.charCode)
    myGuess.takeGuess(character)
    puzzleContent.textContent = myGuess.getPuzzleResult()
    remainderContent.textContent = myGuess.statusMessage()
    console.log(myGuess.status)

})









