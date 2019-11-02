'use strict'


let todos = getSavedTodos()

const filters = {
    searchTodos: '',
    hideCompleted: false
}


renderTodos(todos, filters)


document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchTodos = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-editor').addEventListener('submit', (e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {

    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)

})