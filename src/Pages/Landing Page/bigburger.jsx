import React from 'react'
import PropTypes from 'prop-types'
import img from "../../Assects/burger2.png"

const bigburger = props => {
  return (
    <div className="container-fluid big_burger">
      <div className="container  pt-5">
        <div className="row">
          <div className="col-md-5 offset-md-1 pb-md-5 mb-md-5 mt-md-5 pt-md-3 text-md-start text-center">
            <h1 className="mt-1 mt-md-3">Big Burger</h1>
            <h5 className="pt-1 pt-md-3 mb-md-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </h5>
            <button className="button_b mt-1 mt-md-3">Order Now</button>
          </div>
          <div className="col-md-4 offset-md-1 pb-md-5 mb-sm-5 mt-md-5 pt-md-3 pt-5 text-center">
            <img src={img} alt="" className="img-fluid big_img" width="50%"/>
          </div>
        </div>
      </div>
    </div>
  )
}

bigburger.propTypes = {}

export default bigburger