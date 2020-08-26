const { NavLink, withRouter } = ReactRouterDOM


 function _Header() {
    return (
       <header>
            <h1>Miss Book-Shop</h1>
        <nav className="main-nav">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/mail">Mail</NavLink>
            <NavLink exact to="/keep">Keep</NavLink>
        </nav>
       </header>
    )
}


export const Header = withRouter(_Header)