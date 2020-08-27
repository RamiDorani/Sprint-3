import {NotePreview} from './NotesPreview.jsx'

export function NoteList({notes}) {
    return(
        <ul className="note-list">
            {notes.map(note => <NotePreview note={note}/* deleteNote={deleteNote}*/ key={note.id} />)}
        </ul>
       
    )
}