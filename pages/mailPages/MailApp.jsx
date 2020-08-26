import {Search} from '../../cmps/mailCMPs/MailSearch.jsx'
import {mailService} from '../../services/mail-service.js'
import {MailList} from '../../cmps/mailCMPs/MailList.jsx'

export class MailApp extends React.Component {
    state = {
        filterBy : '',
        mails:[],
    }
    componentDidMount() {
        this.loadMails();
      }

      loadMails() {
          mailService.query()
          .then(mails => this.setState({mails}))
          //.then(mails => console.log(mails))
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

    
        render() {
            const mails = this.getMailsForDisplay();
            //console.log(mails);
        return (
            <div>
                <h1>MAIL APP</h1>
                <Search  onFilter={this.setFilter}/>
                <main>
                <MailList mails={mails} />
                </main>
            </div>
        )
    }
}