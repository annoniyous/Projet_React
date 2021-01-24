import React, { Component } from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faGooglePlus} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Footer() {
    
    return (
      
    <div>
      <footer>
         {/* Footer Links */}
              <div className="container">
                {/* Grid row*/}
                <div className="row text-center d-flex justify-content-center pt-5 mb-3">
                  {/* Grid column */}
                  <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                      <a href="#!">About us</a>
                    </h6>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                      <a href="#!">Products</a>
                    </h6>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                      <a href="#!">Awards</a>
                    </h6>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                      <a href="#!">Help</a>
                    </h6>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-2 mb-3">
                    <h6 className="text-uppercase font-weight-bold">
                      <a href="#!">Contact</a>
                    </h6>
                  </div>
                  {/* Grid column */}
                </div>
                {/* Grid row*/}
                <hr className="rgba-white-light" style={{margin: '0 15%'}} />
                {/* Grid row*/}
                <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
                  {/* Grid column */}
                  <div className="col-md-8 col-12 mt-5">
                    <p style={{lineHeight: '1.7rem'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                      explicabo.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                  </div>
                  {/* Grid column */}
                </div>
                {/* Grid row*/}
                <hr className="clearfix d-md-none rgba-white-light" style={{margin: '10% 15% 5%'}} />
                {/* Grid row*/}
                <div className="row ">
                  {/* Grid column */}
                  <div className="col-md-12">
                    <div className=" d-flex justify-content-center">
                      {/* Facebook */}
                      <a className="fb-ic">
                      <i className="fab fa-facebook fa-5x white-text mr-4"><FontAwesomeIcon icon={faFacebook} /></i>
                      </a>
                      {/* Twitter */}
                      <a className="tw-ic">
                      
                        <i className="fab fa-twitter fa-5x white-text mr-4"><FontAwesomeIcon icon={faTwitter} /> </i>
                      </a>
                      {/* Google +*/}
                      <a className="gplus-ic">
                      
                        <i className="fab fa-google-plus-g fa-5x white-text mr-4"> <FontAwesomeIcon icon={faGooglePlus} /></i>
                      </a>
                      {/*Linkedin */}
                      <a className="li-ic">
                     
                        <i className="fab fa-linkedin-in fa-5x white-text mr-4">  <FontAwesomeIcon icon={faLinkedin} /></i>
                      </a>
                      {/*Instagram*/}
                      <a className="ins-ic">
                      
                        <i className="fab fa-instagram fa-5x white-text mr-4"> <FontAwesomeIcon icon={faInstagram} /></i>
                      </a>
                      {/*Pinterest*/}
                      <a className="pin-ic">
                      
                        <i className="fab fa-pinterest fa-5x white-text"> <FontAwesomeIcon icon={faPinterest} /></i>
                      </a>
                    </div>
                  </div>
                  {/* Grid column */}
                </div>
                {/* Grid row*/}
              </div>

            {/* 2eme parti footer */}
              {/* Footer Elements */}
              <div className="container">
                {/*Grid row*/}
                <div className="row d-flex justify-content-center">
                  {/*Grid column*/}
                  <div className="col-md-6">
                    {/* Video */}
                    <div className="embed-responsive embed-responsive-16by9 mb-4">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowFullScreen />
                    </div>
                  </div>
                  {/*Grid column*/}
                </div>
                {/*Grid row*/}
              </div>


          {/* 3eme parti du footer */}
              {/* Footer */}
              <div className="page-footer font-small mdb-color lighten-3 pt-4">
                {/* Footer Elements */}
                <div className="container">
                  {/*Grid row*/}
                  <div className="row">
                    {/*Grid column*/}
                    <div className="col-lg-2 col-md-12 mb-4">
                      {/*Image*/}
                      <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" className="img-fluid" alt="" />
                        <a href>
                          <div className="mask rgba-white-light" />
                        </a>
                      </div>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-lg-2 col-md-6 mb-4">
                      {/*Image*/}
                      <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg" className="img-fluid" alt="" />
                        <a href>
                          <div className="mask rgba-white-light" />
                        </a>
                      </div>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-lg-2 col-md-6 mb-4">
                      {/*Image*/}
                      <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg" className="img-fluid" alt="" />
                        <a href>
                          <div className="mask rgba-white-light" />
                        </a>
                      </div>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-lg-2 col-md-12 mb-4">
                      {/*Image*/}
                      <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(81).jpg" className="img-fluid" alt="" />
                        <a href>
                          <div className="mask rgba-white-light" />
                        </a>
                      </div>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-lg-2 col-md-6 mb-4">
                      {/*Image*/}
                      <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(82).jpg" className="img-fluid" alt="" />
                        <a href>
                          <div className="mask rgba-white-light" />
                        </a>
                      </div>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-lg-2 col-md-6 mb-4">
                      {/*Image*/}
                      <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(84).jpg" className="img-fluid " alt="" />
                        <a href>
                          <div className="mask rgba-white-light" />
                        </a>
                      </div>
                    </div>
                    {/*Grid column*/}
                  </div>
                  {/*Grid row*/}
                </div>
                {/* Footer Elements */}
                {/* Copyright */}
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                  <a href="https://mdbootstrap.com/"> Paul&Youssef.com</a>
                </div>
                {/* Copyright */}
              </div>
              {/* Footer */}
          

    </footer>

      
    </div>
      );
  
    }
    
    export default Footer;