import React from 'react'
import PropTypes from 'prop-types'

const update = props => {
  return (
    <div className="conatiner-fluid update d-flex align-items-center">
      <div className="container text-center ">
        <div className="mb-3 mb-5">
          <h1>Don't miss Our Updates</h1>
          <h5 className="pe-lg-5 ps-lg-5 me-lg-5 ms-lg-5 mt-ms-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. </h5>
          
        </div>

        <div className="input-group forum  mb-3 mt-2" >
          <input type="text" className="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="button-addon2"/>
          <button className="btn btn-outline-secondary button_b " type="button" >Button</button>
        </div>
        
    </div>
    </div>

  )
}

update.propTypes = {}

export default update