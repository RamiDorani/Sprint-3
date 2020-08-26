const { Link } = ReactRouterDOM

import {mailService} from '../../services/mail-service.js'

export class MailDetailes extends React.Component {

    state = {
        mail: null,
    }

    componentDidMount() {
        const mailId = this.props.match.params.mailId;
        mailService.getMailById(mailId)
        .then(mail => {
            this.setState({ mail })
            console.log(this.state.mail);
        })    
    }

    render() {
        const { mail } = this.state;
        if(!mail) return <div>Loading...</div>
        return (
            <div>
                <section className="mail-detailes flex-col">
                <h2>{mail.sender}</h2>
                <h3>{mail.subject}</h3>
                <p>{mail.body}</p>
            </section>
            <button><Link to="/mail">Back</Link></button>
            </div>
        )
    }
}