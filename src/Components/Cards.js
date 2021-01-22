import React from 'react'
import yo from '../images/wil-stewart-RpDA3uYkJWM-unsplash.jpg'
import './Cards.css'

export default function Cards() {
    return (
          <section>
        <div>
        <div className="d-flex align-items-start flex-wrap">
          <div className="card mb-3 w-75">
            <img className="card-img-top imgcard" src={yo} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Duck Duck go et le SEO</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>


          <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={yo} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">Card link</a>
                  <a href="#" className="card-link">Another link</a>
                </div>
              </div>
           </div>
          
        </div>

            </div>
        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">La search console</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
          <img className="card-img-bottom imgcard" src={yo} alt="Card image cap" />
        </div>
          </section>
    )
}
