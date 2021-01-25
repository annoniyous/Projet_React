// Componenents


import Footer from './Footer'
import Article from './Article'
import Cards from './Cards'
import Contact from './Contact'





// import React, { useState } from 'react';

function Home() {
  
  // const [mouseover, setMouseOver] = useState("all around the world")
    
  return (
      <div>
        {/* Caroussel */}
      <div className="jumbotron text-center">
          {/* Title */}
          <h1 className="card-title h4 pb-2"><strong>Le SEO comme un pro</strong></h1>
          {/* Card image */}
          <div className="view overlay my-4 pt-5">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(30).jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(44).jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
            <a href="#">
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          <h5 className="indigo-text h5 mb-4">Que est ce que le SEO ?</h5>
          <p className="card-text">le SEO ou referencement naturel est un ensemble de technique permetant de ranquer plus haut dans les recherches google pour un theme donné.
           celui ci est déterminé notement par la qualité de la reponse utilisateur.</p>
          
      </div>
          <Cards/>
          <Contact/>
          <Article />
          <Footer />
        </div>
     
  
    );

  }
  
  export default Home;