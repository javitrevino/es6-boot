'use strict'


const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const noteDate = document.querySelector("#date-indicator")
const removeButton = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)

let notes = getSavedNotes()

let note = notes.find((note) => note.id === noteId)

if (!note) {
    location.assign(`/index.html`)
    console.log("no")
}

noteTitle.value = note.title
noteBody.value = note.body
noteDate.textContent = generateLastEdited(note.updatedAt)


noteTitle.addEventListener('input', (e) => {

    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    noteDate.textContent = generateLastEdited(note.updatedAt)

    saveNotes(notes)

})


noteBody.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    noteDate.textContent = generateLastEdited(note.updatedAt)

    saveNotes(notes)
})

removeButton.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {

        notes = JSON.parse(e.newValue)
        notes = getSavedNotes()

        note = notes.find(() => note.id === noteId)

        if (!note) {
            location.assign(`/index.html`)
            console.log("no")
        }

        noteTitle.value = note.title
        noteBody.value = note.body
        noteDate.textContent = generateLastEdited(note.updatedAt)

    }
})