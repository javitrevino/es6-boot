const myNotes = [{
    title: 'my next trip',
    body: 'I would like to go to Japan'
}, {
    title: 'Habits to work on',
    body: 'Excercise. Drinking water more often.'

}, {
    'title': 'Life plan',
    body: 'become a Montreal value investor negative zsum'

}]

/*
how sort works:

1. the compare function allows us to determin if one things should come after or before another thing. 
2. The compare function gets called with two individual items, two todos in this case.
3. The typical way to use it is to call the parameters 'a' and 'b' , representing two objects from the array
4. it's our job to look at a and b and figure out with one should come first.
5. Depending on which one should come first it's upt to return one of these 3 values:
 
    if a should come first we return -1
    if b should come first we return 1
    if both of them don't have their order changed, then we return 0

** use comparison operators to decice the values.
 */
const sortNotes = function (myNotes) {
    myNotes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }

    })
}

sortNotes(myNotes)
console.log(myNotes)







