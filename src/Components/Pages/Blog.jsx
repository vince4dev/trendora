import React from 'react'
import { Link } from 'react-router-dom';

import blog1 from "./../../assets/images/blog-1.jpg";
import blog2 from "./../../assets/images/blog-2.jpg";
import blog3 from "./../../assets/images/blog-3.jpg";
import blog4 from "./../../assets/images/blog-4.jpg";
import blog5 from "./../../assets/images/blog-5.jpg";
import blogbg from "./../../assets/images/blog-bg.png";

function Blog() {
  return (
    <>
      {/* Page Section */}
      <div className="page-section py-3 bg-light border-top border-bottom">
        <div className="container">
          <span><Link to="/">Home</Link> &nbsp;| &nbsp; Blog</span>
        </div>
      </div>
      <div className="blog py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {[{
                img: blog1, title: "Why Organizers Think They Got Creamed", tag: "Video"
              }, {
                img: blog2, title: "The surprising benefit of Scary play on way out", tag: "Video"
              }, {
                img: blog3, title: "12 food you can eat lot of without getting", tag: "Video"
              }, {
                img: blog4, title: "Our company creates with a hobby", tag: "Sports", tagClass: "sports"
              }, {
                img: blog5, title: "The dark fate that awaits every player", tag: "Rugby", tagClass: "rugby"
              }].map((post, index) => (
                <div className="col-lg-12" key={index}>
                  <div className={`blog-card w-100 ${index !== 0 ? "mt-4" : ''}`}>
                    <img src={post.img} alt="Blog" className="card-img-top rounded mb-4" />
                    <div className="blog-card-body">
                      <h5 className={`mb-4 ${post.tagClass || ''}`}>{post.tag}</h5>
                      <h2 className="fw-bold b-3">{post.title}</h2>
                      <span className='mt-3'>by <strong>Ricky</strong> - <a href="#">January 29, 2024</a></span>
                      <p className='mt-3 mb-3'>Tuesday's primary is the first big test of the legislation, wich was opposed by voting rights groups and Democrats. Struggling to sell one multi-million dollar home currently on the market won't stop</p>
                      <i className="ri-arrow-right-long-line"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4 blog-right">
              <div className="promo-card mb-4">
                <img src={blogbg} alt="Promo Background" className="img-fluid" />
              </div>

              <div className="trending-post">
                <h4 className='mb-4'>Trending Posts</h4>
                {[blog1, blog2, blog3, blog4].map((imgSrc, idx) => (
                  <div className="d-flex align-items-center gap-3 mb-4" key={idx}>
                    <img src={imgSrc} className="mb-3" alt="Post image" />
                    <div>
                      <h5 className="mb-1 fw-bold">{
                          ["Why Organizers Think They Got Creamed", "The surprising benefitt of Scary play on way out", "12 food you can eat lot of without getting", "our company creates with a hobby"][idx]
                        }
                      </h5>
                      <small>January 29, 2024</small>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="search-card">
                <h4 className="fw-bold">Search</h4>
                <div className="input-btn d-flex gap-3 mb-4">
                  <input type="text" />
                  <button>Search</button>
                </div>
              </div>

              <div className="recent-post">
                <h5 className='fw-bold mb-3'>Recent Posts</h5>
                <ul className='list-unstyled'>
                  {[
                    "Why Organizers Think They Got Creamed",
                    "The surprising benefitt of Scary play on way out",
                    "12 food you can eat lot of without getting",
                    "our company creates with a hobby",
                    "The dark fate that awaits every player"
                  ].map((text, idx) => (
                    <li className="mb-3" key={idx}><a href="#">{text}</a></li>
                  ))}
                </ul>
              </div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog