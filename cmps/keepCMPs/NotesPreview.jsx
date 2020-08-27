import {NoteText} from '../keepCMPs/NoteText.jsx'

export function NotePreview({note}) {
      switch (note.type) {
         case 'NoteText':
             return <NoteText { ...note } />
         case 'NoteImg':
             return <NoteImg { ...note } />
         case 'NoteTodos':
             return <NoteTodos { ...note } />
         default:
             return <h1>Something went wrong</h1>
     }
         
}

// function NoteText({ note }) {
//    return <h1>text note { note } </h1>
//    // <button onClick={deleteNote}>X</button> </h1>
// }

function NoteImg({ note }) {
   return <h1>img note { note }</h1>
}

function NoteTodos({ note }) {
   return <h1>todos note { note }</h1>
}
