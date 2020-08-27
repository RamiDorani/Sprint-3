
import {Search} from '../../cmps/jointCMPs/search.jsx'
import {missKeepService} from '../../services/missKeep-service.js'
import {NoteList} from '../../cmps/keepCMPs/NoteList.jsx'
import { NoteInput } from '../../cmps/keepCMPs/NoteInput.jsx';


export class KeepApp extends React.Component {

    state = {
        notes: [],
        filterBy: "",
        value : ''
     };
    componentDidMount() {
        this.loadNotes();
    }

    loadNotes() {
        missKeepService.query()
            .then(notes => {
                this.setState({ notes })
            })
    }

    addNote = (note) => {
            missKeepService.addNewNote(note)
            .then(notes => {
                this.setState({ notes })
            })
    }

    // deleteNote= (note)=> {

    // }

    setFilter = (filterBy) => {
        this.setState({ filterBy });
      };
    
      getNotesForDisplay() {
        const notes = this.state.notes.filter((note) =>
          note.type.includes(this.state.filterBy)
        );
        return notes;
      }
    
    render() {
        const notes= this.getNotesForDisplay();
        
        return (
            <div>
                <h1>KEEP APP</h1>
                <Search onFilter={this.setFilter} />
                <NoteInput  addNote= {this.addNote}/>
                <main>
                <NoteList notes={notes}/* deleteNote={this.deleteNote}*/ />
                </main>

            </div>
        )
    }
}