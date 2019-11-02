let name = '  Javier Trevino  '


let password = 'abc123password098'

console.log(name.toUpperCase())
console.log(name.trim())

// isValidPassword 
// length is more than 8 and doesn't contain the word password

let isValidPassword = function (password) {

    return password.length >= 8 && !password.includes('password')

}

console.log(isValidPassword('asdf'))
console.log(isValidPassword('asdf122230000044psword'))
console.log(isValidPassword('asdf122230000rfrgrgrg0password44'))
