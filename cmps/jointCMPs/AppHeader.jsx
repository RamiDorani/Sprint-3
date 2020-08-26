const { NavLink, withRouter } = ReactRouterDOM


 function _Header() {
    return (
       <header className="main-header flex space-between">
            <h1>APSUS</h1>
        <nav className="main-nav">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/mail">Mail</NavLink>
            <NavLink exact to="/keep">Keep</NavLink>
        </nav>
       </header>
    )
}


export const Header = withRouter(_Header)