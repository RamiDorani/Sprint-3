// import { Search } from '../cmps/jointCMPs/search.jsx'
// import { missKeepService } from '../services/missKeep-service.jsx'
// import { NoteList } from '../cmps/keepCMPs/NoteList.js

import {Search} from '../../cmps/jointCMPs/search.jsx'
import {missKeepService} from '../../services/missKeep-service.js'
import {NoteList} from '../../cmps/keepCMPs/NoteList.jsx'


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
            .then(notes => {
                console.log(notes);
                this.setState({ notes })
            })
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
                <Search onFilter={this.setFilter} />
                <h1>KEEP APP</h1>
                {/* <Input></Input> */}
                <main>
                <NoteList notes={notes} />
                </main>

            </div>
        )
    }
}