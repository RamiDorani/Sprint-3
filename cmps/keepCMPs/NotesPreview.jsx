const { Link } = ReactRouterDOM

export function NotePreview({note}) {
    return (
        <Link to={`/keep/${note.id}`}>
         <article >
            <p>{note.info.txt}</p>
         </article>
        </Link>
         )
}