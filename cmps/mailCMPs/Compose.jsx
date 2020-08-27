



export function AddMail ({onCloseModal,onAddMail,mail,handleChange}) {
    
    return (
        <div className="modal-wrapper"  onClick={onCloseModal}>
            <form className="flex-col modal-content" onClick= {(ev) => ev.stopPropagation()}>
                <input type="text" value={mail.to}  placeholder="to" onChange={handleChange} name="to"  />
                <input type="text" value={mail.subject} name="subject" onChange={handleChange} placeholder="subject" />
                <textarea onChange={handleChange} value={mail.body} name="body"  cols="30" rows="10"></textarea>
                <button onClick={onAddMail}>Send</button>
            </form>
        </div>
    )
}







// import { AddMail } from './AddMail.jsx'
// import {mailService} from '../../services/mail-service.js'

// export class Compose extends React.Component {

//     state = {
//         isShow: false,
//         mail : {
//             to : '',
//             subject : '',
//             body : ''
//         }
//     }


//     openModal = () => {
//         this.setState({isShow : true})
//     }

//     closeModal = () => {
//         this.setState({isShow : false})
//     }

//     onAddMail = () => {
//         mailService.addMail(this.state.mail)
//         this.closeModal();
//         const emptyMail = mailService.getEmptyMail();
//         this.setState({mail : emptyMail });
//         this.props.onNewRender.newRender;
//     }

//     handleChange = (ev)=> {
//         this.setState({mail : {
//             ...this.state.mail, [ev.target.name] : ev.target.value
//         }})
//     }
    
//     render() {
//         return (
//             <div>
//                 <button onClick={this.openModal}>+ Compose</button>
//                 {this.state.isShow &&  <AddMail onCloseModal={this.closeModal} onAddMail={this.onAddMail} mail={this.state.mail}  handleChange={this.handleChange} />}
//             </div>
//         )
//     }
// }