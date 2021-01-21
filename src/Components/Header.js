import './Header.css'
import "bootstrap/dist/css/bootstrap.min.css" 
import "jquery/dist/jquery" 
import "bootstrap/dist/js/bootstrap.bundle.min"
// Mes images
import logo from '../img/logo.png'


function Header() {
    return (
      <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto col-lg-5 justify-content-center liS">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Actu <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">SEO novice <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <div>
              <img src={logo} alt="" height="100px"/>
          </div>
          <ul className="navbar-nav mr-auto col-lg-5 justify-content-center liS">
            <li className="nav-item active">
              <a className="nav-link" href="#">Formation <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Conférence <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Audio SEO<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Video SEO <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          
        </div>
      </nav>
          
          
          
    </div>
    );
}

export default Header;