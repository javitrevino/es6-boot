
let user = {
    name: 'Justine',
    age: 22,
    location: 'Dorval, Québec'
}

console.log(`${user.name} is ${user.age} and lives in ${user.location}`)

user.age = 23

console.log(`${user.name} is ${user.age} and lives in ${user.location}`)

user.location = 'St. Leonard'

console.log(`${user.name} moved to ${user.location}`)
