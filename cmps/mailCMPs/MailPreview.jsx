
const { Link } = ReactRouterDOM

export function MailPreview({mail}) {
    return (
        <Link to={`/book/${mail.id}`}>
         <article className="mail-preview flex space-evenly">
             <h3>{mail.subject}</h3>
            <p>{mail.body}</p>
         </article>
        </Link>
         )
}