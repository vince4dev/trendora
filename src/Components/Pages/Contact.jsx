import React from 'react'
import { Link } from 'react-router-dom'

import subscribeImg from './../../assets/images/subscribe-img.png';

function Contact() {
  return (
    <>
    {/* Page Section */}
    <div className="page-section py-3 bg-light border-top border-bottom">
      <div className="container">
        <span><Link to={"/"}>Home</Link> &nbsp; | &nbsp; Contact</span>
      </div>
    </div>

    <section className='bg-white'>
      <div className="container mt-3 py-3">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-6">
                <h3>Office Address</h3>
                <div className="d-flex mt-3 gap-3">
                  <i className="fa-solid fa-location-dot text-primary"></i>
                  <p className="text-secondary">
                    The Business Center 132, My Street Kingston, New York 12401 United States
                  </p>
                </div>
              </div>

              <div className="col-sm-6 mt-4 mt-sm-0">
                <h6>Call Information</h6>
                <div className="d-flex align-items-center mt-3 gap-3">
                  <i className='fa-solid fa-mobile-screen-button text-primary'></i>
                  <p>Phone: <span className='text-secondary'>(+1) 234 567 89</span></p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <i className='fa-solid fa-phone-volume text-primary'></i>
                  <p>Phone: <span className='text-secondary'>+1-541-234-3010</span></p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <i className='fa-solid fa-envelope text-primary'></i>
                  <p>Phone: <span className='text-secondary'>vince@gmail.com</span></p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="fw-bold">Get in Touch</div>
              <p className="mt-3 text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt necessitatibus dolore suscipit? Ullam molestias laborum vero accusantium.
              </p>
              <form className="row g-3 mt-4">
                <div className="col-md-6">
                  <input type="text" className="form-control p-3 bg-transparent border-secondary shadow-none" placeholder="Name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control p-3 bg-transparent border-secondary shadow-none" placeholder="Email" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control p-3 bg-transparent border-secondary shadow-none" placeholder="Phone Number" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control p-3 bg-transparent border-secondary shadow-none" placeholder="Website" />
                </div>
                <div className="col-12">
                  <textarea className="form-control p-3 bg-transparent border-secondary shadow-none"  rows="5" placeholder="Message" />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary px-4 rounded-pill mt-2">Submit</button>
                </div>
              </form>
            </div>  
          </div>

          <div className="col-lg-6 mt-4 mt-md-4 d-flex justify-content-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28082.9268788752!2d2.3578588798361237!3d48.86159604844312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e19ff53a01%3A0x36401da7abfa068d!2sCath%C3%A9drale%20Notre-Dame%20de%20Paris!5e1!3m2!1sfr!2sfr!4v1791491962405!5m2!1sfr!2sfr"
              style={{ border: "0px", width: "100%"}}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <section className="py-5 subscribe border-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-md-5">
            <h2 className="fw-bold">Get the best blog stories into your inbox!</h2>
            <form className="d-flex mt-4">
              <div className="input-group shadow-sm overflow-hidden">
                <span className="input-group-text bg-white border-0">
                  <i className="bi bi-envelope"></i>
                </span>
                <input type="email" className="form-control border-0" placeholder="Enter Yopur Email" required />
                <button className="btn ab-sub btn px-4 d-flex align-items-center rounded-pill" type="submit">
                  <i className="bi bi-send me-2"></i> SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6 text-center">
            <img src={subscribeImg} alt="Subscribe" className="subscribe-img"/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact