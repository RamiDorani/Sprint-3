import {MailPreview} from '../mailCMPs/MailPreview.jsx'

export function MailList({mails}) {
    console.log(mails);
    return(
        <ul className="mail-list">
            {mails.map(mail => <MailPreview mail={mail} key={mail.id} />)}
        </ul>
    )
}