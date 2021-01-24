import React from 'react'


export default function Cards() {
    return (

<div className="m-5">
  {/* Premiere series de cards */}
  <div className="card card-image mb-5" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}>
        {/* Content */}
        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
          <div>
            <h5 className="pink-text"><i className="fas fa-chart-pie" /> Marketing</h5>
            <h3 className="card-title pt-2"><strong>This is the card title</strong></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
              Odit sed qui, dolorum!.</p>
            <a className="btn btn-pink"><i className="fas fa-clone left" /> View project</a>
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
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap" />
            <a href="#!">
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card content*/}
          <div className="card-body">
            {/*Title*/}
            <h4 className="card-title">Card title</h4>
            {/*Text*/}
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
            <button type="button" className="btn btn-light-blue btn-md">Read more</button>
          </div>
        </div>
        {/* Card */}
        {/* Card */}
        <div className="card mb-4">
          {/*Card image*/}
          <div className="view overlay">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap" />
            <a href="#!">
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card content*/}
          <div className="card-body">
            {/*Title*/}
            <h4 className="card-title">Card title</h4>
            {/*Text*/}
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
            <button type="button" className="btn btn-light-blue btn-md">Read more</button>
          </div>
        </div>
        {/* Card */}
        {/* Card */}
        <div className="card mb-4">
          {/*Card image*/}
          <div className="view overlay">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap" />
            <a href="#!">
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/*Card content*/}
          <div className="card-body">
            {/*Title*/}
            <h4 className="card-title">Card title</h4>
            {/*Text*/}
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
            <button type="button" className="btn btn-light-blue btn-md">Read more</button>
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
