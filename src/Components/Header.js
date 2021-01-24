
// Mes image

import {Link} from "react-router-dom";

function Header() {
    return (
     
        
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button> */}
      {/* Nav */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto col-lg-5 justify-content-center  ">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Article">Actu <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Article">SEO novice <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Contact">Contact <span className="sr-only">(current)</span></Link>
          </li>
        </ul>
        <div className="mr-5">
            <img src="./img/logo.png" alt="" height="100px" width="100px"/>
        </div>
        <ul className="navbar-nav mr-auto col-lg-5 justify-content-end">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Formations <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">Conférences <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">Videos<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Footer">Réseau<span className="sr-only">(current)</span></Link>
          </li>
        </ul>
      </div>
      
  </nav>
  


    );
}

export default Header;