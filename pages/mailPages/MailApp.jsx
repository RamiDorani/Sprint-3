import { MailDetailes } from './MailDetailes.jsx'
import { MailList } from '../../cmps/mailCMPs/MailList.jsx'
import {AddMail} from '../../cmps/mailCMPs/Compose.jsx'
import {mailService} from '../../services/mail-service.js'



const { Route, Switch } = ReactRouterDOM;

export class MailApp extends React.Component {

    state = {
        isShow: false,
        mail: {
            to: '',
            subject: '',
            body: ''
        }
    }
    
    openModal = () => {
        this.setState({ isShow: true })
    }

    closeModal = () => {
        this.setState({ isShow: false })
    }

    onAddMail = () => {
        mailService.addMail(this.state.mail)
        this.closeModal();
        const emptyMail = mailService.getEmptyMail();
        this.setState({ mail: emptyMail });
    }

    handleChange = (ev) => {
        this.setState({
            mail: {
                ...this.state.mail, [ev.target.name]: ev.target.value
            }
        })
    }


    render() {
        return (
            <div>
                <h1>MAIL APP</h1>

                <main>
                    <button onClick={this.openModal}>+ Compose</button>
                    <Switch>
                        {/* <Route  component={AddMail} path="mail/compose/:id?" /> */}
                        <Route component={MailDetailes} path="/mail/:mailId" exact />
                        <Route component={MailList} path="/mail" exact />
                    </Switch>
                   {this.state.isShow && <AddMail onCloseModal={this.closeModal} onAddMail={this.onAddMail} mail={this.state.mail} handleChange={this.handleChange} />}
                   </main>
            </div>
        )
    }
}















// import {MailDetailes} from './MailDetailes.jsx'
// import {MailList} from '../../cmps/mailCMPs/MailList.jsx'



// const { Route, Switch } = ReactRouterDOM;

// export class MailApp extends React.Component {

//         render() {
//         return (
//             <div>
//                 <h1>MAIL APP</h1>

//                 <main>
//                     <Switch>
//                         <Route component={MailDetailes}  path="/mail/:mailId" exact />
//                         <Route component={MailList} path="/mail" exact />
//                     </Switch>
//                     {/* path="mail/compose/:id?" */}
//                 </main>
//             </div>
//         )
//     }
// }

