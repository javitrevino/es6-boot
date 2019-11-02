/* const myAge = 28
const message = myAge >= 18 ? 'You can vote' : 'You cannot vote.'
console.log(message) */

const myAge = 28
const showPage = () => {
    return 'Showing the page'
}

const showErrorPage = () => {
    return 'Shoring the error page'
}


const message = myAge >= 21 ? showPage() : showErrorPage()

const team = ['Tyler', 'Porter', 'Patty', 'pierre', 'Pedro']

const gameMessage = team.length <= 4 ? `Team Size : ${team.length}` : `Too many people on your team`

console.log(gameMessage)