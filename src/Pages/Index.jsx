
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import Datas from "./../data.json";

import sidePost1 from "../assets/images/side-post-1.jpg";
import sidePost2 from "../assets/images/side-post-2.jpg";
import sidePost3 from "../assets/images/side-post-3.jpg";
import sidePost4 from "../assets/images/side-post-4.jpg";
import sidePost5 from "../assets/images/side-post-5.jpg";
import sidePost6 from "../assets/images/side-post-6.png";
import sidePost7 from "../assets/images/side-post-7.png";
import sidePost8 from "../assets/images/side-post-8.jpg";
import sidePost9 from "../assets/images/side-post-9.jpg";
import sidePost10 from "../assets/images/side-post-10.jpg";
import banner from "../assets/images/banner.png";
import editorPack1 from "../assets/images/editor-pack-1.jpg";
import editorPack2 from "../assets/images/editor-pack-2.jpg";
import editorPack3 from "../assets/images/editor-pack-3.jpg";
import heroPost4 from "../assets/images/hero-post-4.png";
import postAuthor from "../assets/images/post-author.png";
import post1 from "../assets/images/post-1.jpg";
import post2 from "../assets/images/post-2.jpg";
import img1 from "../assets/images/categori-img-1.jpg";
import img2 from "../assets/images/categori-img-2.jpg";
import img3 from "../assets/images/categori-img-3.jpg";
import img4 from "../assets/images/categori-img-4.jpg";

function Index() {
  const [activeTab, setActiveTab] = useState("trending");

  const trendingPosts = [
    { img: sidePost1, category: "Business", text: "Navigation System as anything Doesn't Space" },
    { img: sidePost2, category: "Tech", text: "15 ways you can your phone your productivity" },
    { img: sidePost3, category: "Tech", text: "How to Change The Icons For Your Favorite Apps on" },
    { img: sidePost4, category: "Business", text: "How Product Disigners Can Gamification for any Good" },
    { img: sidePost5, category: "Food", text: "The 6 best & Worst Foods for your skin and" }
  ];

  const latestPosts = [
    { img: sidePost6, category: "Illustration", text: "64 Creative Marketing Ideas to Boost Your Business"},
    { img: sidePost7, category: "Illustration", text: "A Guide to Effective SEO Tactics to Improve Ranking"},
    { img: sidePost8, category: "Illustration", text: "Fraphic Design Trends That will Help your Business"},
    { img: sidePost9, category: "Illustration", text: "Marketing Trends Insights in Design and Graphics"},
    { img: sidePost10, category: "Illustration", text: "Why UX Designers Should Learn the Graphic Design?"}
  ];

  const postToDisplay = activeTab === "trending" ? trendingPosts : latestPosts;

  const categories = [
    { title: "Business", Posts: 3, image: img1 },
    { title: "Travel", Posts: 8, image: img2 },
    { title: "Lifestyle", Posts: 5, image: img3 },
    { title: "Tech", Posts: 3, image: img4 },
  ]

  return (
    <>
      {/* Headline Text */}
      <div className="container mt-3">
        <div className="d-flex align-items-center gap-4">
          <span className="headline-title"><i className="bi bi-lightning"></i>Top News</span>

          <Swiper
            className="headline-text-swiper"
            slidesPerView={1}
            spaceBetween={10}
            direction={'vertical'}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {Datas.map((Data, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="headline d-flex align-items-center gap-2">
                    <p className="m-0">{Data.title}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        {/* Headline Post */}
        <div className="row mt-5">
          <Swiper
            className="headline-post-swiper"
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {Datas.map((Data, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="headline-card d-flex align-items-center gap-2">
                    <div className="headline-image">
                      <img src={Data.image} className="img-fluid" alt="" />
                    </div>
                    <div className="headline-det">
                      <span>{Data.tag}</span>
                      <p>{Data.paragraph}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        
        {/* Hero Post Section */}
        <div className="row mt-5">
          <div className="col-lg-3">
            {Datas.slice(2, 4).map((Data, index) => {
              return (
                <div className="post-card" key={index}>
                  <div className="post-img">
                    <img src={Data.image} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="post-content mt-3">
                    <span className="post-span post-span1">{Data.tag}</span>
                    <h2>{Data.title}</h2>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="col-lg-6 blog-swiper">
            <Swiper
              className="rounded"
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              {Datas.map((Data, index) => {
              return (
                <SwiperSlide key={Data.id}>
                  <div className={`post-wrap-card post-wrap-card${index + 1}`} style={{background: `url(${Data.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="post-wrap-content w-100 p-5">
                      <span className="post-span3">{Data.tag}</span>
                      <h2>{Data.title}</h2>
                      <p>{Data.paragraph}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
            </Swiper>
          </div>

          <div className="col-lg-3">
              <div className="post-box-wrap">
                <div className="post-box-tab d-flex gap-3">
                  <button 
                    className={`btn ${activeTab === "trending" ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setActiveTab("trending")}
                  >Trending News
                  </button>
                  <button 
                    className={`btn ${activeTab === "latest" ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setActiveTab("latest")}
                  >Latest News
                  </button>
                </div>

                <div className="mt-4 shadow px-3 py-2 rounded">
                  {postToDisplay.map((post, index) => (
                    <div className={`post-box d-flex align-items-center gap-2 border-bottom pb-2 ${index === 0 ? "mt-3": "mt-3"}`} key={index}>
                      <div className="post-box-img">
                        <img src={post.img} className="img-fluid" alt="" />
                      </div>
                      <div className="post-box-content">
                        <span>{post.category}</span>
                        <p>{post.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="banner-img py-5 my-5">
        <div className="container">
          <div className="col-lg-12 top-banner-img">
            <img src={banner} className="img-fluid rounded-4" alt="" />
          </div>
        </div>
      </div>

      {/* Editor Pick */}
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            <h4 className="mb-4 editor-title">Editor's Pick</h4>
            <div className="col-lg-8">
              <div className="position-relative mb-3">
                <img src={editorPack2} className="img-fluid rounded w-100" alt="" />
                <div className="sport-card position-absolute bg-white p-3 shadow">
                  <span className="tag food post-span post-span4 post-tag">SPORTS</span>
                  <h5 className="mt-2">Credit Shouldn't Affect Health Insurance, Experts Say</h5>
                  <p className="text-muted small mb-2">Tuesday's primary is the first big test of the legislation, which was opposed by voting rights groups and Democrats. Struggling</p>
                  <p className="small text-muted mt-2">by <strong>Ricky</strong> &nbsp; - &nbsp; January 29 2024 &nbsp; <span>0</span></p>
                </div>
              </div>
            </div>
            
            <div className="row g-3">
              <div className="col-md-4 post-wrap">
                <img src={editorPack1} className="img-fluid rounded mb-2" alt="" />
                <span className="post-span post-tag post-span1">FOOD</span>
                <p className="mb-0 fw-bold mt-2">19 Cold Soup Recipes for Hot Summer Days</p>
                <small>by Ricky - January 29, 2024</small>
              </div>
              <div className="col-md-4 post-wrap">
                <img src={editorPack3} className="img-fluid rounded mb-2" alt="" />
                <span className="post-span post-tag post-span1">TECH</span>
                <p className="mb-0 fw-bold mt-2">Winners of the 2023 the Nature Conservancy any Contest</p>
                <small>by Ricky - January 29, 2024</small>
              </div>
              <div className="col-md-4 post-wrap">
                <img src={heroPost4} className="img-fluid rounded mb-2" alt="" />
                <span className="post-span post-tag post-span1">LIFESTYLE</span>
                <p className="mb-0 fw-bold mt-2">Timeless and Chic Outfits for Your an Endless Wardrobe</p>
                <small>by Ricky - January 29, 2024</small>
              </div>
            </div>
          </div>

          <div className="col-lg-4 follow">
            <h4 className="mb-3">Follow Us</h4>
            <div className="row">

              <div className="col-6 mb-2">
                <div className="social-box facebook d-flex align-items-center gap-3 mb-3">
                  <i className="ri-facebook-box-line"></i>
                  <div>
                    <h5 className="mb-0">Facebook</h5>
                    <small>23K Likes</small>
                  </div>
                </div>
              </div>

              <div className="col-6 mb-2">
                <div className="social-box twitter d-flex align-items-center gap-3 mb-3">
                  <i className="ri-twitter-line"></i>
                  <div>
                    <h5 className="mb-0">Twitter</h5>
                    <small>56K Followers</small>
                  </div>
                </div>
              </div>

              <div className="col-6 mb-2">
                <div className="social-box youtube d-flex align-items-center gap-3 mb-3">
                  <i className="ri-youtube-line"></i>
                  <div>
                    <h5 className="mb-0">Youtube</h5>
                    <small>48K Subscribes</small>
                  </div>
                </div>
              </div>

              <div className="col-6 mb-2">
                <div className="social-box spotify d-flex align-items-center gap-3 mb-3">
                  <i className="ri-spotify-line"></i>
                  <div>
                    <h5 className="mb-0">Spotify</h5>
                    <small>14K Followers</small>
                  </div>
                </div>
              </div>

              <div className="col-6 mb-2">
                <div className="social-box instagram d-flex align-items-center gap-3 mb-3">
                  <i className="ri-instagram-line"></i>
                  <div>
                    <h5 className="mb-0">Instagram</h5>
                    <small>4m Followers</small>
                  </div>
                </div>
              </div>

              <div className="col-6 mb-2">
                <div className="social-box pinterest d-flex align-items-center gap-3 mb-3">
                  <i className="ri-pinterest-line"></i>
                  <div>
                    <h5 className="mb-0">Pinterest</h5>
                    <small>59K Followers</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="author-card mt-4 text-center border rounded shadow p-5 mt-5">
              <img src={postAuthor} className="img-fluid" alt="" />
              <h6 className="mt-2">Hello, I'm James</h6>
              <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt omnis quibusdam illo eos nam.</p>
              <button className="btn btn-primary btn-sw">About Me</button>
            </div>
          </div>
        </div>
      </div>

      {/* Most Read */}
      <div className="container my-5">
        <div className="row">
          <div className="head-wrap my-3 d-flex justify-content-between align-items-center">
            <h2>Most Read</h2>
            <button className="btn">Read More</button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="mr-card-wrap position-relative">
              <div className="mr-content position-absolute">
                <span className="post-span post-span2">Travel</span>
                <h3 className="title">Extaordinary Snoqualmie falls and Settle Tour</h3>
                <p className="small mt-2">by <strong>Ricky</strong> &nbsp; - &nbsp; January 29, 2024 &nbsp; <span>0</span></p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3">
            <div className="post-card">
              <div className="post-img mr-card-img">
                <img src={post1} className="img-fluid rounded" alt="" />
              </div>
              <div className="post-content mt-3">
                <span className="post-span post-span1">Food</span>
                <h2>Who Owns Your Body: 10 Steps to the Best Shape</h2>
              </div>
            </div>
            <div className="post-card">
              <div className="post-img mr-card-img">
                <img src={post2} className="img-fluid rounded" alt="" />
              </div>
              <div className="post-content mt-3">
                <span className="post-span post-span3">Travel</span>
                <h2>The Best Therapy for Your Mind and Soul done</h2>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
              <div className="post-box-wrap">
                <div className="post-box-tab d-flex gap-3">
                  <button 
                    className={`btn ${activeTab === "trending" ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setActiveTab("trending")}
                  >Trending News
                  </button>
                  <button 
                    className={`btn ${activeTab === "latest" ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setActiveTab("latest")}
                  >Latest News
                  </button>
                </div>

                <div className="mt-4 shadow px-3 py-2 rounded">
                  {postToDisplay.map((post, index) => (
                    <div className={`post-box d-flex align-items-center gap-2 border-bottom pb-2 ${index === 0 ? "mt-3": "mt-3"}`} key={index}>
                      <div className="post-box-img">
                        <img src={post.img} className="img-fluid" alt="" />
                      </div>
                      <div className="post-box-content">
                        <span>{post.category}</span>
                        <p>{post.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="container categories py-5">
        <div className="row g-4">
          {categories.map((cat, i) => (
            <div className="col-12 col-md-6 col-lg-3" key={i}>
              <div 
                className="card text-white border-0 position-relative overflow-hidden"
                style={{
                  borderRadius: "16px",
                  height: "100%"
                }}
              >
                <img 
                  src={cat.image} 
                  className="card-img" 
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px"
                  }}
                  alt="" />
                  <div className="card-img-overlay d-flex flex-column justify-content-end text-center bg-dark bg-opacity-50 rounded">
                    <p className="mb-1 fs-57">{cat.Posts} Posts</p>
                    <h5 className="card-title fw-bold">{cat.title}</h5>
                    <button className="btn btn-outline-light btn-sm w-auto mx-auto mt-2 rounded-pill px-4">
                      See ALl
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Index