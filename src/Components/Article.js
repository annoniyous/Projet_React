import React from 'react'

function Article() {
  
    
  return (
  <div>
     <div className="jumbotron card card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)'}}>
        <div className="text-white text-center py-5 px-4">
          <div>
            <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Create your beautiful website with MDBootstrap</strong></h2>
            <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
            </p>
            <a className="btn btn-outline-white btn-md"><i className="fas fa-clone left" /> View project</a>
          </div>
        </div>
      </div>

      {/* 2eme partie */}

            {/* Jumbotron */}
            <div className="jumbotron text-center">
        {/* Title */}
        <h2 className="card-title h2">Material Design for Bootstrap</h2>
        {/* Subtitle */}
        <p className="blue-text my-4 font-weight-bold">Powerful and free Material Design UI KIT</p>
        {/* Grid row */}
        <div className="row d-flex justify-content-center">
          {/* Grid column */}
          <div className="col-xl-7 pb-2">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.</p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
        <hr className="my-4" />
        <div className="pt-2">
          <button type="button" className="btn btn-blue waves-effect">Buy now <span className="far fa-gem ml-1" /></button>
          <button type="button" className="btn btn-outline-primary waves-effect">Download <i className="fas fa-download ml-1" /></button>
        </div>
      </div>
      {/* Jumbotron */}

    {/* 3eme parti */}
   
      
    
  </div>
    );

  }
  
  export default Article;