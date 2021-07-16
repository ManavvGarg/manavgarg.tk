const Navbar = (props) => {

    return(

        <nav id="navbar" className="navbar" style={
          {
            margin: "0",
            width: "auto",
            height: "100px",
            bottom: "11px",
            paddingTop: "15px",
            backgroundColor: "black",
            justifyContent: "center"
          }
        }>
        <ul>
          <li><a className={"nav-link " + props.home} href="/">Home</a></li>
          <li><a className={"nav-link " + props.about} href="/about">About</a></li>
          <li><a className={"nav-link " + props.proj} href="/projects">Projects</a></li>
          <li><a className={"nav-link " + props.cont} href="/contact">Contact</a></li>
        </ul>
      </nav>

    );
}

export default Navbar;