import React, { useState } from 'react'

import Datas from "./../../assets/data/data.json";
import { data, Link, useParams } from "react-router-dom";

function BlogDetail() {
  const {id} = useParams();
  const blog = Datas.find((f) => f.id == id);

  const [image, setImage] = useState(`./../${blog.image}`);
  const [blogImage, setBlogImage ] = useState(`./../${blog.content.blogImage}`);

  return (
    <>
      <div className="w-100 position-relative" style={{ background: `url('${image}') no-repeat`, height: '600px', backgroundSize: `cover` }}>
        <div className="blog-header-content">
          <p>
            <span className='badge badge-secondary'>
              {blog.tag}
            </span>

            <span className='badge badge-secondary'>
              {blog.author_date}
            </span>
          </p>
          <h1>{blog.title}</h1>
        </div>
      </div>

      <div className="container blog-content-container">
        <div className="row">
          <div className="col-lg-8 col-md-6 p-5">
            <p>{blog.content.intro}</p>

            <img src={blogImage} alt="" className='w-100 mb-5' style={{height: "400px", objectFit: "cover"}}/>

            {blog.content.Points.map((point, index) => (
              <div key={index}>
                <h6 className='mb-2'>{point.title}</h6>
                <p className='fs-6'>{point.text}</p>
              </div>
            ))}

            <p><strong>{blog.content.conclusion}</strong></p>
          </div>

          <div className="col-lg-4 col-md-6 p-5">
            <h3>Recent Posts</h3>
            {
              Datas.map((data, index) => {
                return (
                  <div className="d-flex flex-direction-column">
                    <Link to={`/Blog/${data.id}`} className="headline d-flex align-items-center gap-2">
                      <p className="mb-3">{data.title}</p>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div> 
    </>
  )
}

export default BlogDetail