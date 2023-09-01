import React from 'react'
import PropTypes from 'prop-types'
import img1 from "../../Assects/Mask.png"
import img2 from "../../Assects/mask 2.png"
import img3 from "../../Assects/mask 3.png"

const ourchef = props => {
  return (
    <div className="container-fluid our_chef text-center">
      <h1 className="pt-5">Our Cheff</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vi <br/> vamus lacinia odio vitae vestibulum vestibulum. </p>
      <div className="row container pt-md-5 pb-md-5 mt-md-5 mb-md-5 d-flex">

        <div className="col-md-3 mask offset-md-2 me-md-3 ">
          <img src={img1} alt="" className="img-fluid "/>
          <h1>AIDEN HUNTER</h1>
          <h5>Founder</h5>
        </div>

        <div className="col-md-3 mask me-md-3">
          <img src={img2} alt="" className="img-fluid"/>
          <h1>AIDEN HUNTER</h1>
          <h5>Founder</h5>
        </div>

        <div className="col-md-3 mask me-md-3  ">
          <img src={img3} alt="" className="img-fluid"/>
          <h1>AIDEN HUNTER</h1>
          <h5>Founder</h5>
        </div>

      </div>
    </div>
  )
}

ourchef.propTypes = {}

export default ourchef