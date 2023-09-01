import React from 'react'
import PropTypes from 'prop-types'
import img from "../../Assects/Shape.png"

const bestburger = props => {
  return (
    <div className="container-fluid best_burger">
      <div className="container pt-md-5">
        <div className="row">
          <div className="col-md-4 offset-md-1 pb-md-5 mb-sm-5 mt-md-5 pt-md-3 pt-5  text-center">
            <img src={img} alt="" className="big_img img-fluid" width="50%" />
          </div>
          <div className="col-md-5 offset-md-1 pt-md-5 text-center text-md-start">
            <h1 className="mt-1 mt-md-3">Best Burger</h1>
            <h5 className="pt-1 pt-md-3 mb-md-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </h5>
            <button className="button_w mt-1 mt-md-3">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

bestburger.propTypes = {}

export default bestburger