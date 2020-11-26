const Layout = props => {

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
      
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0 auto";
    }
      
    return(
        <div className="container">
            <header>
                {/* {<span style={{'font-size':'30px','cursor':'pointer', 'textAlign':'left'}} onClick={openNav}>&#9776;</span>} */}
                <i className="fas fa-list-ul"></i> To-Do List
            </header>
            <nav id="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">Home</a>
                <a href="#">Settings</a>
            </nav>
            <main id="main">
                {props.children}
            </main>
            <footer>
                @ Copyrights: keerthivijay89@gmail.com
            </footer>
        </div>

    );
}

export default Layout;