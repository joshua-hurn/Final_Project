import React from "react";
import { Link } from "react-router-dom";
import "./HomeCards.css";

class HomeCards extends React.Component {
  render() {
    return (
      <div className="row d-flex flex-wrap justify-content-around">
        <div className="col-sm-5 p-4" style={{ borderRadius: ".8em", backgroundColor: "black" }} >
            <div className="" >
              <h5 className="whitebungee outlinered text-center" style={{ fontSize: "30px" }}>Recipients</h5>
              <p className="text-white text-center" style={{ fontFamily: "pacifico", fontSize: "26px" }}>Find what you need</p>
              <Link to="/AllParts" className="btn font-weight-bold btn-outline-danger d-flex justify-content-center">
                S E L E C T
              </Link>
            </div>
          </div>
        <div className="col-sm-5 p-4" style={{ borderRadius: ".8em", backgroundColor: "black" }} >
          <div className="" >
              <h5 className="whitebungee outlinered text-center" style={{ fontSize: "30px" }}>Donors</h5>
              <p className="text-white text-center" style={{ fontFamily: "pacifico", fontSize: "26px" }}>Give a prosthetic</p>
              <Link to="/Donations" className="btn font-weight-bold d-flex justify-content-center btn-outline-danger">
                D O N A T E
              </Link>
            </div>
          </div>
      </div>
    );
  }
}
export default HomeCards;
