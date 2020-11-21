const Layout = props => {

    return(
        <div className="container">
            <header>
                <i className="fas fa-list-ul"></i> To-Do List
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                @ Copyrights: keerthivijay89@gmail.com
            </footer>
        </div>

    );
}

export default Layout;