
// Bootrstrap
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap.bundle.min"
import 'jquery/dist/jquery'
import './index.css'; 



import Header from './Components/Header'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Article from './Components/Article'
import Footer from './Components/Footer'


import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

// import "jquery/dist/jquery" import "bootstrap/dist/js/bootstrap.bundle.min" 
// import { faHome } from "@fortawesome/free-solid-svg-icons"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
// import Cards from './Components/Cards'



import React from "react";

function App() {
  return (
    <div>
       <Router>
            <Header/>

            <Switch>
          <Route path="/article">
            <Article />
          
            
          </Route>
        
          <Route path="/contact">
          <Contact />
            
          </Route>
          <Route path="/footer">
          <Footer />
            
          </Route>
          <Route path="/">
            <Home />
            
          </Route>

          </Switch>
      </Router>
    
     
    </div>
  );
}

export default App;