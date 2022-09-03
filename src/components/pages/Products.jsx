import React, { useState } from 'react'
import { renderLoading } from '../../utilities/Loader'

export default function Products() {
  const [loading, setLoading] = useState(false)

  const renderProducts = () => {
    return (
      <>
        <div className="row g-3">
          <div className="d-flex flex-wrap mb-5 justify-content-center">
            <button className="btn btn-outline-dark me-2">ALL</button>
            <button className="btn btn-outline-dark me-2">
              Men's Clothing
            </button>
            <button className="btn btn-outline-dark me-2">
              Women's Clothing
            </button>
            <button className="btn btn-outline-dark me-2">Jewelry</button>
            <button className="btn btn-outline-dark me-2">Electronic</button>
          </div>
        </div>
        <h1>Render Products</h1>
      </>
    )
  }
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center py-5">
              Latest Products
            </h1>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          {loading ? renderLoading() : renderProducts()}
        </div>
      </div>
    </div>
  )
}
