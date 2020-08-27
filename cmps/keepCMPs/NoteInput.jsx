import {NoteText} from './NoteText.jsx'

export class NoteInput extends React.Component {
    state = {
        txt: '',
        type: 'NoteText'
    };


    handleChange = (event) => {
        this.setState({ txt: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    NEW NOTE:
            <input type="text" value={this.state.txt} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                
            </form>
        );
    }
}