export function CountUnreadMails({mails}) {
    const unreadMails = mails.filter(mail => !mail.isRead)
    const x = 10;
    return(
        <div>
            <h4>There is {unreadMails.length} UNREAD Emails</h4>
        </div>
    )
}