import React from 'react'
import PropTypes from 'prop-types'
import img1 from "../../Assects/Title.png"
import img2 from "../../Assects/109 Outlets.png"
import img3 from "../../Assects/35 country.png"

const statics = props => {
  return (
    <div className="container-fluid statics text-center">
      <div className="container text-center text-break pe-5 px-lg-5">
        <div><h1>Statistics</h1>
        <p className="pe-lg-5 ps-lg-5  me-lg-5 ms-md-5 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Vivamus lacinia odio vitae vestibulum vestibulum. </p></div>
      </div>

      <div className="row container pt-md-3 pb-md-5 mb-lg-3 d-flex text-center">
        <div className="col-3 offset-2 me-lg-4 mt-1">
          <img src={img1} alt="" className="img_fluid big_img" width="80%"/>
        </div>
        <div className="col-3 me-lg-4 ms-lg-3 mt-1">
          <img src={img2} alt="" className="img_fluid big_img" width="80%"/>
        </div>
        <div className="col-3 ms-lg-3 mt-1">
          <img src={img3} alt="" className="img_fluid big_img"  width="80%"/>
        </div>
        
      </div>
    </div>
  )
}

statics.propTypes = {}

export default statics