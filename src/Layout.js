const Layout = props => {

    return(
        <div>
            <header>
                <i class="fas fa-list-ul"></i> To-Do List
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