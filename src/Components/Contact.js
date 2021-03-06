import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faPhone}  from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';


function Contact() {
    
  return (
   <div className="contact">

     {/* Contact us 1 er parti */}
       {/*Section: Contact v.2*/}
       <section className="mb-4">
        {/*Section heading*/}
        <h2 className="h1-responsive font-weight-bold text-center my-4">Nous contacter</h2>
        {/*Section description*/}
        <p className="text-center w-responsive mx-auto mb-5">Vous avez besoin d'aide pour le SEO de vottre site ? Vous ne savez pas par quoi commencer ou vous cherchez du coatching pour obtenir votre autonomie ? nous sommes la pour vous !</p>
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="name" name="name" className="form-control" />
                    <label htmlFor="name" className>Nom</label>
                  </div>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="email" name="email" className="form-control" />
                    <label htmlFor="email" className>Email</label>
                  </div>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
              {/*Grid row*/}
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input type="text" id="subject" name="subject" className="form-control" />
                    <label htmlFor="subject" className>Coaching ? Questions ?</label>
                  </div>
                </div>
              </div>
              {/*Grid row*/}
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
              </div>
              {/*Grid row*/}
            </form>
            <div className="text-center text-md-left">
              <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Envoyer</a>
            </div>
            <div className="status" />
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
            <i className="fab fa-map-marker-alt fa-3x white-text mr-4">  <FontAwesomeIcon icon={faMapMarkerAlt}/></i>
              
                <p>Bruxelles, CA 1050, Belgium</p>
        
              <i className="fab fa-phone fa-3x white-text mr-4">  <FontAwesomeIcon icon={faPhone}/></i>
             
                <p>+ 01 234 567 89</p>
       
              <i className="fab fa-envelope fa-3x white-text mr-4">  <FontAwesomeIcon icon={faEnvelope}/></i>
             
                <p>contact@Paul&Youssef.com</p>
     
            </ul>
          </div>
          {/*Grid column*/}
        </div>
      </section>
      {/*Section: Contact v.2*/}
       
    
      </div>







      
  
   
    );

  }
  export default Contact;