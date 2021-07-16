import Credits from '../partials/credits';
import Navbar from '../partials/navbar2';
import MobileNav from '../partials/MobileNav';
import '../css/mobileNav.css';

import React from "react";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

  let formStatus;
  const [state, handleSubmit] = useForm("xgerzbka");
  if (state.succeeded) {
    return(

      <html>
        <body>

      <Navbar cont="active"/>

        <section id="contact" className="contact section-show">
        <div className="container">
    
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>
    
          <div className="row mt-2">
    
            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-share-alt"></i>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a href="https://github.com/ManavvGarg" target="_blank" className="github" rel="noreferrer"><i className="bi bi-github"></i></a>
                  <a href="https://twitter.com/manavvgarg_" target="_blank" className="twitter" rel="noreferrer"><i className="bi bi-twitter"></i></a>
                  <a href="https://www.instagram.com/manavvgarg" target="_blank" className="instagram" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/manavvgarg/" target="_blank" className="youtube" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                  <a href="https://www.youtube.com/channel/UCNNWJbXYSnfiKr-uayTW-eA" target="_blank" className="youtube" rel="noreferrer"><i className="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>
    
            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-envelope"></i>
                <h3>Email Me</h3>
                <p>manav.garg@hotmail.com</p>
              </div>
            </div>
          </div>
          
                <div className="col-md-12 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-file"></i>
                <h3>My Curriculum vitae</h3>
                <p><a href="'../data/manav-cv.pdf" target="_blank">Download/Open <i className="fa fa-external-link-alt"></i></a></p>
              </div>
            </div>
          </div>
    
      </section>

      <section id="formMail" className="formMail section-show col-md-12 mt-4 d-flex align-items-stretch" style={{ top: "470px" }}>
        <div className="container">


        <div className="section-title">
            <h2>Send me a message</h2>
          </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required="required"
            name="name"
            style={{ marginTop: "10px" }}
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div><br />
        <div className="form-group">
          <label htmlFor="email" required="required">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            style={{ marginTop: "10px" }}
          />      
          <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        </div><br />
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea 
            className="form-control"
            id="message"
            required="required"
            name="message"
            style={{ marginTop: "10px" }}></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
        </div>
        <div className="form-group mt-3">
            <div className="alert alert-success">
              Your message has been sent.
            </div>
          <button type="submit" className="btn" disabled={state.submitting} style={{
            backgroundColor: "white"
          }}>
            Submit
          </button>
        </div>
      </form>


        </div>

      </section>
        </body>

        <MobileNav />
        <Credits />
      </html>

    );
    
  }



    return(

      <html>
        <body>

      <Navbar cont="active"/>

        <section id="contact" className="contact section-show">
        <div className="container">
    
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>
    
          <div className="row mt-2">
    
            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-share-alt"></i>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a href="https://github.com/ManavvGarg" target="_blank" className="github" rel="noreferrer"><i className="bi bi-github"></i></a>
                  <a href="https://twitter.com/manavvgarg_" target="_blank" className="twitter" rel="noreferrer"><i className="bi bi-twitter"></i></a>
                  <a href="https://www.instagram.com/manavvgarg" target="_blank" className="instagram" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/manavvgarg/" target="_blank" className="youtube" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                  <a href="https://www.youtube.com/channel/UCNNWJbXYSnfiKr-uayTW-eA" target="_blank" className="youtube" rel="noreferrer"><i className="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>
    
            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-envelope"></i>
                <h3>Email Me</h3>
                <p>manav.garg@hotmail.com</p>
              </div>
            </div>
          </div>
          
                <div className="col-md-12 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-file"></i>
                <h3>My Curriculum vitae</h3>
                <p><a href="'../data/manav-cv.pdf" target="_blank">Download/Open <i className="fa fa-external-link-alt"></i></a></p>
              </div>
            </div>
          </div>
    
      </section>

      <section id="formMail" className="formMail section-show col-md-12 mt-4 d-flex align-items-stretch" style={{ top: "470px" }}>
        <div className="container">


        <div className="section-title">
            <h2>Send me a message</h2>
          </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required="required"
            name="name"
            style={{ marginTop: "10px" }}
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div><br />
        <div className="form-group">
          <label htmlFor="email" required="required">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            style={{ marginTop: "10px" }}
          />      
          <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        </div><br />
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea 
            className="form-control"
            id="message"
            required="required"
            name="message"
            style={{ marginTop: "10px" }}></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
        </div>
        <div className="form-group mt-3">
          {formStatus ? (
            <div className="alert alert-success">
              Your message has been sent.
            </div>
          ) : (
            ""
          )}
          <button type="submit" className="btn" disabled={state.submitting} style={{
            backgroundColor: "white"
          }}>
            Submit
          </button>
        </div>
      </form>


        </div>

      </section>
        </body>

        <MobileNav />
        <Credits />
      </html>

    );
}

export default Contact;