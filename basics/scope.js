// Lexical Scope

// global scope - defined oustide of all code blocks

// local scope  - defined inside inside a code block

// In a scope you can access variables defined in that scope or any parent/ancester scope

// Global Scope (varOne)
// Local scope (varTwo)
// Local Scope (varFour)
// Local Scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)