'use strict'


let notes = getSavedNotes()
const noteId = location.hash.substring(1)


const filters = {
    searchText: '',
    sortBy: 'byEdited'
}



renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()


    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })

    saveNotes(notes)
    location.assign(`/edit.html#${id}`)

})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})


document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)

    }


})


/* const now = moment()
now.subtract(1, 'week').subtract(20, 'days')


const nowTimestamp = now.valueOf()


const bday = moment()
bday.year(1991).month(4).date(23)

const mybday = bday.format('MMM D, YYYY')

console.log(mybday)


 */




