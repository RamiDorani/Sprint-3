import {NotePreview} from './NotesPreview.jsx'

export function NoteList({notes}) {
    return(
        <ul className="note-list">
            {notes.map(note => <NotePreview note={note} key={note.id} />)}
        </ul>
    )
}