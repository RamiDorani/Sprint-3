import {Search} from '../cmps/mailCMPs/MailSearch.jsx'
import {mailService} from '../services/mail-service.js'
import {MailList} from '../cmps/mailCMPs/MailList.jsx'

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
      mail.subject.includes(this.state.filterBy)
    );
    return mails;
  }

    
        render() {
            const mails = this.getMailsForDisplay();
            //console.log(mails);
        return (
            <div>
                <Search  onFilter={this.setFilter}/>
                <h1>MAIL APP</h1>
                <main>
                <MailList mails={mails} />
                </main>
            </div>
        )
    }
}