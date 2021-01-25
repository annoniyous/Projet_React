import React from 'react'

function Article() {
  
    
  return (
  <div>
     <div className="jumbotron card card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)'}}>
        <div className="text-white text-center py-5 px-4">
          <div>
            <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Le SEO en 2021 ?</strong></h2>
            <p className="mx-5 mb-5">SEO est l'acronyme de Search Engine Optimization et peut être défini comme l'art de positionner un site, une page web ou une application dans les premiers résultats naturels des moteurs de recherche. En français, le SEO est désigné par le terme de référencement naturel.
            </p>
            <a className="btn btn-outline-white btn-md"><i className="fas fa-clone left" /> ça m'interesse</a>
          </div>
        </div>
      </div>

      {/* 2eme partie */}

            {/* Jumbotron */}
            <div className="jumbotron text-center">
        {/* Title */}
        <h2 className="card-title h2">Je souhaite me renseigner sur le SEO</h2>
        {/* Subtitle */}
        <p className="blue-text my-4 font-weight-bold">Regoignez nottre programme de coatching SEO qui a déja vu emerger des dizaines de clients !</p>
        {/* Grid row */}
        <div className="row d-flex justify-content-center">
          {/* Grid column */}
          <div className="col-xl-7 pb-2">
            <p className="card-text">Coatching personalisé et sur mesure que ce qoit pour du e-commerce, un boost en visibilité sur le net pour vottre activité ou des conseils pratiques, nous somment la pour vous !</p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
        <hr className="my-4" />
        <div className="pt-2">
          <button type="button" className="btn btn-blue waves-effect">Une Question ? <span className="far fa-gem ml-1" /></button>
          <button type="button" className="btn btn-outline-primary waves-effect">Un Coaching <i className="fas fa-download ml-1" /></button>
        </div>
      </div>
      {/* Jumbotron */}

    {/* 3eme parti */}
   
      
    
  </div>
    );

  }
  
  export default Article;