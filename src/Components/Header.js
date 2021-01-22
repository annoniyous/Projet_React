import Home from './Home'
import Contact from './Contact'
import Article from './Article'
// Mes image
import logo from '../img/logo.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
    return (
     
          <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto col-lg-5 justify-content-center salut">
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
        <div>
            <img src={logo} alt="" height="100px"/>
        </div>
        <ul className="navbar-nav mr-auto col-lg-5 justify-content-center">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Formations <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">Conférences <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">Audio SEO<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">Video SEO<span className="sr-only">(current)</span></Link>
          </li>
        </ul>
        
      </div>
  </nav>
  <Switch>
    <Route path="/article">
      <Article />
      
    </Route>
  
    <Route path="/contact">
    <Contact />
      
    </Route>
    <Route path="/">
      <Home />
      
    </Route>

  </Switch>
</Router>

    );
}

export default Header;