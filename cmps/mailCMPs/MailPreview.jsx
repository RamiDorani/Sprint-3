
const { Link } = ReactRouterDOM

export function MailPreview({mail,onRead,onCheck}) {
    return (
            <div className="mail-preview">
                 <input type="checkbox" className="check-input"  onChange={()=>onCheck(mail.id)}/>
        <Link to={`/mail/${mail.id}`}>
         <article className='mail-info' onClick={ ()=>onRead(mail)}>
            <p className={mail.isRead ? 'read-mail' : 'unread-mail'}>{mail.sender}</p>
             <p className={mail.isRead ? 'read-mail' : 'unread-mail'}>{mail.subject}</p>
            <p className={mail.isRead ? 'read-mail' : 'unread-mail'}>{mail.body}</p>
         </article>
        </Link>
            </div>
         )
}

