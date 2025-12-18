import './header.css';

function Header(){
    return(
         <nav className="navbar">
      <div className="container">
        <div className="logo">
          <i className="fas fa-gem"></i>
          <span>DARK WORLD</span>
        </div>
        <div className="menu">
          <ul className="nav-menu">
            <li className="nav-items"><a href="home" className="nav-links">Home</a></li>
            <li className="nav-items">
              <a href="services" className="nav-links">Service</a>
            </li>
            <li className="nav-items">
              <a href="portfolio" className="nav-links">Portfolio</a>
            </li>
            <li className="nav-items">
              <a href="about" className="nav-links">About</a>
            </li>
            <li className="nav-items">
              <a href="contact" className="nav-links">Contact</a>
            </li>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default Header;