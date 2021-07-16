const Navbar = (props) => {
    return(

        <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link active" href="/">Home</a></li>
          <li><a className="nav-link" href="/about">About</a></li>
          <li><a className="nav-link" href="/projects">Projects</a></li>
          <li><a className="nav-link" href="/contact">Contact</a></li>
        </ul>
      </nav>

    );
}

export default Navbar;