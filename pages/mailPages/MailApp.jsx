import {Search} from '../../cmps/mailCMPs/MailSearch.jsx'
import {mailService} from '../../services/mail-service.js'
import {MailList} from '../../cmps/mailCMPs/MailList.jsx'
import {CountUnreadMails} from '../../cmps/mailCMPs/UnreadMailesCount.jsx'
import {EmailFilter} from '../../cmps/mailCMPs/EmailFilter.jsx'

export class MailApp extends React.Component {
    state = {
        filterBy : '',
        mails:[],
        isRead : null,
        selectedMails :[] ,
    }
    componentDidMount() {
        this.loadMails();
      }

      loadMails() {
          mailService.query()
          .then(mails => this.setState({mails}))
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

  readMail=(mail)=> {
      mail.isRead=true;
  }

//   checked=(id)=>{
//     mailService.getMailById(id)
//         .then(mail=> {
//             mail.isRead=!mail.isRead;
//             this.setState({isRead : mail.isRead})
//             console.log(mail);
//         });
    
//   }

checked=(id)=>{
    mailService.getMailById(id)
    .then(mail=> {
        const joined = [mail,...this.state.selectedMails]
        this.setState({selectedMails : joined})
    });
}

    
        render() {
            const mails = this.getMailsForDisplay();
        return (
            <div>
                <h1>MAIL APP</h1>
                <Search  onFilter={this.setFilter}/>
                <main>
                <CountUnreadMails mails={mails} />
                <EmailFilter />
                <MailList mails={mails} onRead={this.readMail} onCheck={this.checked} />
                </main>
            </div>
        )
    }
}