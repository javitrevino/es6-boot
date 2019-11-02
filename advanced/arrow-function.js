const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}


const people = [{
    name: 'Javier',
    age: 27
}, {
    name: 'Vikram',
    age: 31
}, {
    name: 'Jess',
    age: 22
}
]



const under30 = people.filter((person) => person.age < 30)

const specificPerson = people.find((person) => person.age === 22)

console.log(specificPerson.name)