export function Search(props) {
    return (
        <form>
             <section className="book-filter">
            <h3>filter</h3>
            <input type="text" placeholder="Filter By Mail Subject" onChange={(ev) => {
                props.onFilter(ev.target.value)
            }}/>
    </section>
        </form>
    )
}