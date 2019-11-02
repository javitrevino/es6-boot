
class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.userGuesses = []
        this.status = "playing"
    }

    calculateStatus() {
        const finished = this.word.every((letter) => {
            return this.userGuesses.includes(letter)
        })

        if (this.remainingGuesses === 0) {
            this.status = "failed"
        } else if (finished) {
            this.status = "finished"
        } else {
            this.status = "playing"
        }
    }

    getPuzzleResult() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.userGuesses.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle

    }

    takeGuess(character) {
        character = character.toLowerCase()
        const isUnique = !this.userGuesses.includes(character)
        const isBadGuess = !this.word.includes(character)

        if (this.status !== "playing") {
            return
        }

        if (isUnique) {
            this.userGuesses.push(character)
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }

        this.calculateStatus()
    }

    statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {

            return `You lose, the word was "${this.word.join('')}"`

        } else {
            2

            return 'Nice job, that is the correct word'

        }
    }




}


















