import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from './../../assets/images/about-img.jpg';
import skillBg from './../../assets/images/skill-bg.jpg';
import team1 from './../../assets/images/team-1.jpg';
import team2 from './../../assets/images/team-2.jpg';
import team3 from './../../assets/images/team-3.jpg';
import subscribeImg from './../../assets/images/subscribe-img.png';

function About() {
  return (
    <>
      {/* Page Section */}
      <div className="page-section py-3 bg-light border-top border-bottom">
        <div className="container">
          <span><Link to="/">Home</Link> &nbsp;|&nbsp; About</span>
        </div>
      </div>

      <div className="container about my-5 py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="fw-bold mb-3">
              The Car Industry's Chip Shortage is Far From Over
            </h1>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, dolores. Sunt ratione delectus eveniet, aliquid numquam facere quisquam vero, sint at ut provident itaque aperiam doloribus, cum reiciendis fuga ex porro obcaecati culpa quasi nemo hic minima. Ipsum temporibus dolorum, veritatis dignissimos quis, repudiandae nihil fuga aliquam blanditiis, ad asperiores.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="mb-3"><i className='bi bi-check-circle me-2'></i><strong>Risus ultrices amet facialisis vulputate totor egestas</strong></li>
              <li className="mb-3"><i className='bi bi-check-circle me-2'></i><strong>Eye With Leading Lines</strong></li>
              <li className="mb-3"><i className='bi bi-check-circle me-2'></i><strong>Breaking dwon tje barriers</strong></li>
              <li className="mb-3"><i className='bi bi-check-circle me-2'></i><strong>Website should be easy to navigate</strong></li>
            </ul>
            <h2 className="fw-bold mt-4">
              13 Years Expertices
            </h2>
          </div>
          <div className="col-lg-6">
            <img src={aboutImg} alt="About" className="about-img" />
          </div>
        </div>
      </div>

      <section className='our-skill my-5 py-5'>
        <div className="container">
          <div className="row align-item-center">
            <div className="col-lg-6 mb-4">
              <img src={skillBg} alt="Team Working" />
            </div>
            <div className="col-lg-6">
              <h4 className='mb-3'>Our Skill</h4>
              <h2 className='fw-bold'>Make Beauty Thing With Passion</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil a repudiandae enim laborum officiis! Quo veritatis aut tempore accusantium at consectetur necessitatibus labore facere. Corrupti molestiae, nostrum nisi vel est fugit veniam delectus quibusdam beatae a maxime quos nesciunt facilis odio officia eius adipisci? Temporibus pariatur ipsam reiciendis enim alias?
              </p>

              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span><strong>Development</strong></span>
                  <span>90%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div className="progress-bar bg-primary" style={{ width: "90%" }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span><strong>Success</strong></span>
                  <span>85%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div className="progress-bar bg-primary" style={{ width: "85%" }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span><strong>Finished Projects</strong></span>
                  <span>95%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div className="progress-bar bg-primary" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5 my-5 team'>
        <div className="container">
          <div className="row">
            {[{
              img: team1,
              name: "David bin",
              title: "Creative Director"
            }, {
              img: team2,
              name: "Maria David",
              title: "Manager & GC"
            }, {
              img: team3,
              name: "Maria Cooper",
              title: "Full Steak Developer"
            }].map((member, i) => (
              <div className="col-lg-4 mb-4" key={i}>
                <div className="team-card border-0">
                  <img src={member.img} alt={member} className="card-img-top-4"/>
                  <div className="team-card-body mt-4 d-flex justify-content-between">
                    <div className="team-text">
                      <h5 className="fw-bold mb-1">{member.name}</h5>
                      <p>{member.title}</p>
                    </div>
                    <div className="team-icons d-flex gap-2 mt-2">
                      <i className='fab fa-facebook-f'></i>
                      <i className='fab fa-twitter'></i>
                      <i className='fab fa-linkedin-in'></i>
                      <i className='fab fa-instagram'></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 subscribe border-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-md-5">
              <h2 className='fw-bold'>Get the best blog stries into your inbox !</h2>
              <form className="d-flex mt-4">
                <div className="input-group shadow-sm overflow-hidden"> 
                  <span className="input-group-text bg-white border-0">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input type="email" className="form-control border-0" placeholder="Enter Your Email" required />
                  <button className="btn ab-sub-btn px-4 d-flex align-items-center rounded-pill" type='submit'>
                    <i className="bi bi-send me-2"></i>SUBSCRIBE
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 text-center">
              <img src={subscribeImg} alt="Subscribe" className="subscribe-img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About