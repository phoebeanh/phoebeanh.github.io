export default function Header() {
    return (
        <header className="headerClass">
          <h1><a className="headerClass" href= "phoebengo.com">Phoebe Ngo</a></h1>
          {/* <!--Navigation Bar--> */}
          <nav>
            <ul className="nav-menu">
              <li className="nav-item"><a href="../../index.html">Home</a> </li>
              <li className="nav-item"><a href="/src/coming-soon.html">About</a> </li>
              <li className="nav-item"><a href="/src/coming-soon.html">Projects</a> </li>
              <li className="nav-item"><a href="/src/coming-soon.html">Resume</a> </li>
            </ul>
          </nav>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </header>
    );
}