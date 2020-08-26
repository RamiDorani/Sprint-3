
const { Link } = ReactRouterDOM

export function MailPreview({mail}) {
    return (
        <Link to={`/mail/${mail.id}`}>
         <article className="mail-preview flex space-evenly">
            <h3>{mail.sender}</h3>
             <h3>{mail.subject}</h3>
            <p>{mail.body}</p>
         </article>
        </Link>
         )
}