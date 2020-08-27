import {MailPreview} from '../mailCMPs/MailPreview.jsx'

export function MailList({mails,onRead,onCheck}) {
    return(
        <ul className="mail-list">
            {mails.map(mail => <MailPreview mail={mail} onRead={onRead} onCheck={onCheck} key={mail.id} />)}
        </ul>
    )
}