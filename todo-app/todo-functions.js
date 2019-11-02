'use strict'


const getSavedTodos = () => {

    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []

    } catch (e) {
        return []
    }


}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTodo = (todoId) => {
    const todoIndex = todos.findIndex((todo) => todo.id === todoId)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// create DOM structure for a note

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)



    if (todo) {
        todo.completed = !todo.completed
    }

}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTodos = todo.text.toLowerCase().includes(filters.searchTodos.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTodos && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(createSummary(incompleteTodos))

    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(todoDOM(todo))
    })
}


const todoDOM = (todo) => {
    const todoEl = document.createElement('p')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // set up checkbox

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)

    checkbox.addEventListener('change', (e) => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })




    // setup todo text

    todoText.textContent = todo.text
    todoEl.appendChild(todoText)



    removeButton.textContent = "X"
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
    console.log("working")


}

const createSummary = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary

}

/// Render application todos based on filters





// verify the checkbox status





