import {NotePreview} from '../missKeep/NotesPreview.jsx'

export function NoteList({notes}) {
    console.log(nots);
    return(
        <ul className="note-list">
            {notes.map(note => <NotePreview note={note} key={note.id} />)}
        </ul>
    )
}