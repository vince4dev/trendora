import React from 'react'

import logoLight from "../../assets/images/logo-light.png";
import footer1 from "../../assets/images/footer-1.jpg";
import footer2 from "../../assets/images/footer-2.jpg";
import footer3 from "../../assets/images/footer-3.jpg";


function Footer() {
  return (
    <section className='py-5 footer'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5">
            <div className="d-flex align-items-center mb-3">
              <img src={logoLight} className='footer-logo' alt="" />
            </div>
            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores deserunt, molestias magnam consectetur possimus?</p>
            <h6>Email Us : <a href="#">contact@gmail.com</a></h6>
            <h6>Contact : <a href="#">+5-784-8892-688</a></h6>
            <div className="footer-icons d-flex mt-3 gap-3">
              <i className="ri-facebook-fill"></i>
              <i className="ri-twitter-fill"></i>
              <i className="ri-linkedin-fill"></i>
              <i className="ri-instagram-line"></i>
              <i className="ri-pinterest-line"></i>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <h5 className="fw-bold mb-4">Top Post</h5>
              <div className="d-flex mb-3">
                <img src={footer1} className="f-post me-3" alt="" />
                <div>
                  <span className="mb-1 fw-semibold">Why Organizers Think They Gott Creamed</span><br />
                  <small>January 29, 2024</small>
                </div>
              </div>

              <div className="d-flex mb-3">
                <img src={footer2} className="f-post me-3" alt="" />
                <div>
                  <span className="mb-1 fw-semibold">The surprising benefit of Scary play on way out</span><br />
                  <small>January 29, 2024</small>
                </div>
              </div>

              <div className="d-flex mb-3">
                <img src={footer3} className="f-post me-3" alt="" />
                <div>
                  <span className="mb-1 fw-semibold">12 food you can eat lot of without getting</span><br />
                  <small>January 29, 2024</small>
                </div>
              </div>
          </div>
          <div className="col-lg-4 mb-5">
            <h5 className="fw-bold mb-3">Popular Entries</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#">Why Organizers Think They Got Creamed</a></li>
              <li className="mb-3"><a href="#">The surprising benefit of scary play on way out</a></li>
              <li className="mb-3"><a href="#">12 food you can eat lot of without getting</a></li>
              <li className="mb-3"><a href="#">Our company creates with a hobby</a></li>
              <li><a href="#">The dark fate that awaits every player</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center pt-5 footer-bottom border-top">
        <p>&#169; Copyright All Rights Reserved By <a href="#">vince4dev</a></p>
      </div>
    </section>
  )
}

export default Footer