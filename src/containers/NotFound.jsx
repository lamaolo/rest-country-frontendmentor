import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 d-flex align-items-center flex-column">
          <h1><strong>404:</strong> Page not found.</h1>
          <h2>

          <Link to="/">Go home.</Link>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default NotFound
