import { Search } from '../cmps/jointCMPs/search.jsx'
import { Input } from '../cmps/missKeep/input.jsx'
import { missKeepService } from '../services/missKeep-service.js'
import { NoteList } from '../cmps/missKeep/noteList.js'

export class KeepApp extends React.Component {

    state = {
        notes: [],
        filterBy: "",

    };
    componentDidMount() {
        this.loadNotes();
    }

    loadNotes() {
        missKeepService.query()
            .then(notes => this.setState({ notes }))
    }

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
                <Search />
                <h1>KEEP APP</h1>
                <Input></Input>
                <main>
                <NoteList notes={note} />
                </main>

            </div>
        )
    }
}