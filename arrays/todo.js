
const todos = [{ text: 'Take Excel Course', completed: true }, { text: 'do presentation', completed: false }, { text: 'fix iPhone', completed: true }, { text: 'find wife', completed: false }]
// 1. Convert to Objects instead of strings. text, compelte boolen
// 2. create a function to remove a todo by text value



const deleteTodo = function (todos, todoText) {

    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

// const res = deleteTodo(todos, 'do presentation')

const unfinishedTodos = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })

}

//console.log(unfinishedTodos(todos))

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
 */

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}


sortTodos(todos)
console.log(todos)



