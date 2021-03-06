
export class NoteText extends React.Component {

    state = {
        note: null,
        
    }

    render() {
        console.log(this.props);
        return (

            <div className="note-txt-box list-item">
                <div className="note-txt-value">
                    <p>{this.props.info.txt}</p>
                </div>
                <div className="note-txt-btns-box">
                    <button onClick={() => { this.props.onRemove(this.props.note.id)}}>remove</button>
                    <button>edit</button>
                </div>
            </div>
        )

    }

}