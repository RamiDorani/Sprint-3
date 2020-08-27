import { utils } from '../assets/utils/util.js'

export const missKeepService = {
    query,
    addNewNote
}

var notes = [
    { id: utils.makeId(), type: "NoteText", isPinned: true, info: { txt: "i'm a note 1" } },
    { id: utils.makeId(), type: "NoteImg", url: "https://images.app.goo.gl/QW5t6kPUzBHTXzUs5", title: "sea", isPinned: true },
    {
        id: utils.makeId(), type: "NoteTodos", isPinned: true, info: {
            label: "ToDo:",
            todos: [{ txt: "Do that", doneAt: null }, { txt: "Do this", doneAt: 187111111 }]
        }
    },
    { id: utils.makeId(), type: "NoteText", isPinned: true, info: { txt: "i'm a note 4" } },
    { id: utils.makeId(), type: "NoteText", isPinned: true, info: { txt: "i'm a note 5" } },
    { id: utils.makeId(), type: "NoteText", isPinned: true, info: { txt: "i'm a note 6" } },
    { id: utils.makeId(), type: "NoteText", isPinned: true, info: { txt: "i'm a note 7" } },
    // { id: utils.makeId(), type: "NoteText", isPinned: true, info: { txt: "i'm a note 8" } },
    // { id: utils.makeId(), type: "NoteText", isPinned: true, info: { txt: "i'm a note 9" } },
    // { id: utils.makeId(), type: "NoteText", isPinned: true, info: { txt: "i'm a note 10" } },
]

function query() {
    return Promise.resolve(notes);
}


function addNewNote(note) {
    console.log('this is new note', note);
    const newNote = { id: utils.makeId(), type: note.type, isPinned: true, info: { txt: note.txt } }
    notes.unshift(newNote);
    return Promise.resolve(notes);
}
