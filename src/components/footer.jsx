import React from 'react'
import PropTypes from 'prop-types'

const footer = props => {
  return (
    <footer className="container-fluid d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <h3 className="pb-sm-3 pb-2">Title Here</h3>
              <h5 className="pb-sm-3 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim. </h5>
              <img src="/Assects/social media.png" alt="" width="40%" className=""/>
            </div>
            <div className="col-3 col-sm-2 offset-md-1 pt-3 pt-sm-0">
              <h3 className="pb-sm-3 pb-2">About</h3>
              <h5 className="pb-sm-3 pb-2 pe-sm-5">History
                Our Team
                Brand Guidelines
                Terms & Condition
                Privacy Policy</h5>
            </div>
            <div className="col-3 col-sm-2 me-4 me-md-0 pt-3 pt-sm-0">
              <h3 className="pb-sm-3 pb-2 ">Services</h3>
              <h5 className="pb-sm-3 pb-2 pe-sm-5">How to Order
                Our Product
                Order Status
                Promo
                Payment Method</h5>
            </div>
            <div className="col-3 col-sm-2 pt-3 pt-sm-0">
              <h3 className="pb-sm-3 pb-2">Others</h3>
              <h5 className="pb-sm-3 pb-2 pe-sm-5">Contact Us
                Help
                Privacy
                </h5>
            </div>
          </div>
        </div>
      </footer>
  )
}

footer.propTypes = {}

export default footer