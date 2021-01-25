import React from 'react'


export default function Cards() {
    return (

<div className="m-5">
  {/* Premiere series de cards */}
  <div className="card card-image mb-5 w-100" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/fluid/city/043.jpg)'}}>
        {/* Content */}
        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
          <div>
            <h1 className="pink-text text-secondary"><i className="fas fa-chart-pie" /> AGMENTER SON TRAFIC</h1>
            <h3 className="card-title pt-2"><strong>Les Backlinks</strong></h3>
            <p>pour google il est important de crooner de la credibilité au contenu d'un site si il veut apparaitre dans les premiers resultats. Pour ceci les webmasters vont avoir besoin de liens qui partagent de la puissance soit d'un site qui a deja beaucoup de trafic soit de son propre site, dans ce millieu c'est appelé le "juice".</p>
            <a className="btn btn-pink"><i className="fas fa-clone left" /> Comment Obtenir de bons backlinks ?</a>
          </div>
        </div>
      </div>
      {/* Card */}
    {/* 2eme series de cards */}
     {/* Card deck */}
     <div className="card-deck">
        {/* Card */}
        <div className="card mb-4">
          {/*Card image*/}
          <div className="view overlay">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/17.jpg" alt="Card image cap" />
            <a href="#!">
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card content*/}
          <div className="card-body">
            {/*Title*/}
            <h4 className="card-title">Backlinks</h4>
            {/*Text*/}
            <p className="card-text">Un site internet a besoin de puissance venant de Backlinks pour emerger en 2021</p>
            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
            <button type="button" className="btn btn-light-blue btn-md">Comment en trouevr ?</button>
          </div>
        </div>
        {/* Card */}
        {/* Card */}
        <div className="card mb-4">
          {/*Card image*/}
          <div className="view overlay">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/12.jpg" alt="Card image cap" />
            <a href="#!">
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card content*/}
          <div className="card-body">
            {/*Title*/}
            <h4 className="card-title">Code efficace</h4>
            {/*Text*/}
            <p className="card-text">Google verifie le code d'un site internet pour savoir si celui ci repondra convenablement a la réponse utilisateur.</p>
            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
            <button type="button" className="btn btn-light-blue btn-md">Besoin de conseils en code ?</button>
          </div>
        </div>
        {/* Card */}
        {/* Card */}
        <div className="card mb-4">
          {/*Card image*/}
          <div className="view overlay">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/55.jpg" alt="Card image cap" />
            <a href="#!">
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card content*/}
          <div className="card-body">
            {/*Title*/}
            <h4 className="card-title">Contenu</h4>
            {/*Text*/}
            <p className="card-text">Google aura beson de verrifier si vottre site est mis regulierrement a jour pour cela vous devrez creer du contenu tel que des posts de blog, fiches produits, projets...</p>
            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
            <button type="button" className="btn btn-light-blue btn-md">J'ai besoin d'aide</button>
          </div>
        </div>
        {/* Card */}
      </div>
      {/* Card deck */}
</div>


        //   <section>
        // <div>
        // <div className="d-flex align-items-start flex-wrap">
        //   <div className="card mb-3 w-75">
        //     <img className="card-img-top imgcard" src="img/wil-stewart-RpDA3uYkJWM-unsplash.jpg"alt="Card image cap" />
        //     <div className="card-body">
        //       <h5 className="card-title">Duck Duck go et le SEO</h5>
        //       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //       <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        // </div>


        //   <div className="card" style={{width: '18rem'}}>
        //         <img className="card-img-top" src="img/wil-stewart-RpDA3uYkJWM-unsplash.jpg"alt="Card image cap" />
        //         <div className="card-body">
        //           <h5 className="card-title">Card title</h5>
        //           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //         </div>
        //         <ul className="list-group list-group-flush">
        //           <li className="list-group-item">Cras justo odio</li>
        //           <li className="list-group-item">Dapibus ac facilisis in</li>
        //           <li className="list-group-item">Vestibulum at eros</li>
        //         </ul>
        //         <div className="card-body">
        //           <a href="#" className="card-link">Card link</a>
        //           <a href="#" className="card-link">Another link</a>
        //         </div>
        //       </div>
        //    </div>
          
        // </div>

        //     </div>
        // <div className="card w-75">
        //   <div className="card-body">
        //     <h5 className="card-title">La search console</h5>
        //     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        //   </div>
        //   <img className="card-img-bottom imgcard" src="img/wil-stewart-RpDA3uYkJWM-unsplash.jpg" alt="Card image cap" />
        // </div>
        //   </section>
    )
}
