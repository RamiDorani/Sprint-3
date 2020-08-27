export function EmailFilter({onDelete}) {
    return (
       <div>
            <button>Inbox</button>
            <button>Starred</button>
            <button>Unread</button>
            <button>Deleted</button>
            <button onClick={()=>onDelete()}><i className="fas fa-trash"></i></button>
       </div>
    )
}