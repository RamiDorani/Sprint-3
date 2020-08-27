import { MailPreview } from "../mailCMPs/MailPreview.jsx";
import { Search } from "../../cmps/mailCMPs/MailSearch.jsx";
import { mailService } from "../../services/mail-service.js";
import { EmailFilter } from "../../cmps/mailCMPs/EmailFilter.jsx";


export class MailList extends React.Component {

    state = {
        filterBy: "",
        mails: [],
        isRead: null,
        selectedMails: [],
    };
    componentDidMount() {
        this.loadMails();
    }

    loadMails() {
        mailService.query().then((mails) => this.setState({ mails }));
    }

    setFilter = (filterBy) => {
        this.setState({ filterBy });
    };

    getMailsForDisplay() {
        const mails = this.state.mails.filter((mail) =>
            mail.subject.toLowerCase().includes(this.state.filterBy.toLowerCase())
        );
        return mails;
    }

    readMail = (mail) => {
        mail.isRead = true;
    };

    checked = (id) => {
        mailService.getMailById(id).then((mail) => {
            const selectedMail = [mail, ...this.state.selectedMails];
            this.setState({ selectedMails: selectedMail });
        });
    };

    delete = () => {
        const mailsToDelete = this.state.selectedMails
        mailService.toDeleteMails(mailsToDelete)
        this.loadMails()
    }

    render() {
        const mails = this.getMailsForDisplay();
        console.log(this.props);
        return (
            <section>
                <Search onFilter={this.setFilter} />
                <EmailFilter onDelete={this.delete} />
                <ul className="mail-list">
                    {mails.map((mail) => (<MailPreview mail={mail} onRead={this.readMail} onCheck={this.checked} key={mail.id} />))}
                </ul>
            </section>
        );
    }
}









// import { MailPreview } from "../mailCMPs/MailPreview.jsx";
// import { Search } from "../../cmps/mailCMPs/MailSearch.jsx";
// import { mailService } from "../../services/mail-service.js";
// import { AddMail } from './Compose.jsx'
// import { CountUnreadMails } from "../../cmps/mailCMPs/UnreadMailesCount.jsx";
// import { EmailFilter } from "../../cmps/mailCMPs/EmailFilter.jsx";

// export class MailList extends React.Component {
//     state = {
//         filterBy: "",
//         mails: [],
//         isRead: null,
//         selectedMails: [],
//         isShow: false,
//         mail : {
//             to : '',
//             subject : '',
//             body : ''
//         }
//     };
//     componentDidMount() {
//         this.loadMails();
//     }

//     loadMails() {
//         mailService.query().then((mails) => this.setState({ mails }));
//     }

//     setFilter = (filterBy) => {
//         this.setState({ filterBy });
//     };

//     getMailsForDisplay() {
//         const mails = this.state.mails.filter((mail) =>
//             mail.subject.toLowerCase().includes(this.state.filterBy.toLowerCase())
//         );
//         return mails;
//     }

//     readMail = (mail) => {
//         mail.isRead = true;
//     };

//     checked = (id) => {
//         mailService.getMailById(id).then((mail) => {
//             const selectedMail = [mail, ...this.state.selectedMails];
//             this.setState({ selectedMails: selectedMail });
//         });
//     };

//     delete = () => {
//         const mailsToDelete = this.state.selectedMails
//         mailService.toDeleteMails(mailsToDelete)
//         this.loadMails()
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
//     }

//     handleChange = (ev)=> {
//         this.setState({mail : {
//             ...this.state.mail, [ev.target.name] : ev.target.value
//         }})
//     }
    
//     render() {
//         const mails = this.getMailsForDisplay();
//         console.log(this.props);
//         return (
//             <section>
//                 <Search onFilter={this.setFilter} />
//                 <CountUnreadMails mails={mails} />
//                 <button onClick={this.openModal}>+ Compose</button>
//                 <EmailFilter onDelete={this.delete} />
//                 <ul className="mail-list">
//                     {mails.map((mail) => (<MailPreview mail={mail} onRead={this.readMail} onCheck={this.checked} key={mail.id} />))}
//                 </ul>
//                 <div>
//                 {this.state.isShow &&  <AddMail onCloseModal={this.closeModal} onAddMail={this.onAddMail} mail={this.state.mail}  handleChange={this.handleChange} />}
//             </div>
//             </section>
//         );
//     }
// }















