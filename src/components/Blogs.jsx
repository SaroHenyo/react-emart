import React from 'react'
import { Link } from 'react-router-dom'
import { blogs } from '../utilities/enum'

export default function Blogs() {
  const renderBlogs = () => {
    return blogs.map((item) => (
      <div className="col-md-6 col-lg-4 card border-0 my-3" key={item.id}>
        <img src={item.image} alt={item.name} />
        <div className="card-body px-0">
          <h4 className="card-title">{item.title}</h4>
          <p className="card-text mt-3 text-muted">{item.body}</p>
          <p className="card-text">
            <small className="text-muted">Author: </small>
            {item.author}
          </p>
          <Link to="/products" className="btn">
            Read More
          </Link>
        </div>
      </div>
    ))
  }
  return (
    <section id="blogs" className="py-5">
      <div className="container">
        <div className="title text-center py-5">
          <h2 className="position-relative d-inline-block">Our Latest Blog</h2>
        </div>

        <div className="row">{renderBlogs()}</div>
      </div>
    </section>
  )
}
