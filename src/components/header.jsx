import React from 'react'
import PropTypes from 'prop-types'
import img from "../Assects/logo.png"



const header = props => {
  return (
    <nav className="navbar navbar-expand-lg  ">
        <div className="container pt-5">
          <div className="text-center "><img src={img} alt="Bootstrap"  /></div>
            
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">≡</span> 
          </button>
          <div className="collapse navbar-collapse offset-md-3" id="navbarNav">
            <ul className="navbar-nav anchor">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Promo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active ">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active ">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

header.propTypes = {}

export default header