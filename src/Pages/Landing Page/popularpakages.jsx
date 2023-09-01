import React from 'react'
import PropTypes from 'prop-types'
import img from "../../Assects/Burger Icon.png"

const width = {
    width: "10px",
}

const popularpakages = props => {
  return (
    <div className="container-fluid popular_package">
      <div className="container">
        <div className="text-center pt-4  pb-3">
          <h1 className="pt-3">Popular Package</h1>
        </div>
        <div className="row justify-content-center pt-4 pb-4">


          <div className="col-md-3 pt-sm-2 pe-sm-2 ps-sm-2 mb-2 ">
            <div className="card cards text-center align-content-center"  >
              <h3 className="pt-sm-3 pt-1">PACKAGE I</h3>
              <img className="card-img-top rounded pt-sm-3 pt-1 mx-auto d-block img-fluid " src={img} alt="Card image cap" style={width}/>
              <div className="card-body">
                <h5 className="card-title pt-sm-3 pt-1"> <b>$10.00   </b>  </h5>
                <p className="card-text text-break  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button  > Order Now</button>
              </div>
            </div>

          </div>



          <div className="col-md-3 pt-sm-2 pe-sm-2 ps-sm-2 mb-2">
            <div className="card cards text-center align-content-center"  >
              <h3 className="pt-sm-3 pt-1">PACKAGE II</h3>
              <img className="card-img-top rounded pt-sm-3 pt-1 mx-auto d-block img-fluid " src={img} alt="Card image cap" style={width}/>
              <div className="card-body">
                <h5 className="card-title pt-sm-3 pt-1"> <b>$20.00   </b>  </h5>
                <p className="card-text text-break  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button  > Order Now</button>
              </div>
            </div>

          </div>



          <div className="col-md-3 pt-sm-2 pe-sm-2 ps-sm-2 mb-2">
            <div className="card cards text-center align-content-center"  >
              <h3 className="pt-sm-3 pt-1">PACKAGE III</h3>
              <img className="card-img-top rounded pt-sm-3 pt-1 mx-auto d-block img-fluid " src={img} alt="Card image cap" style={width}/>
              <div className="card-body">
                <h5 className="card-title pt-sm-3 pt-1"> <b>$30.00   </b>  </h5>
                <p className="card-text text-break  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button  > Order Now</button>
              </div>
            </div>

          </div>


          
          
          
        </div>
      </div>




    </div>
  )
}

popularpakages.propTypes = {}

export default popularpakages