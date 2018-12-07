import React, { Component } from "react";
import GoogleApiWrapper from "../services/mapsContainer";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

class SingleProsthetic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prosthetic: {}
    };
  }

  async componentDidMount() {
    try {
      let id = this.props.match.params.id;
      let res = await fetch(`/api/prosthetics/${id}`);
      let prosthetic = await res.json();
      console.log(prosthetic);
      this.setState({ prosthetic });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="single-product-container">
        <Navbar />
        <Jumbotron
          title="Prosthetic By Proxy"
          subtitle="Provider of Prosthetic Patient Needs"
        />
        <div className="row">
          <div className="col-md-4 mt-4">
            <div className="card">
              <div className="card-header bg-secondary text-white">
                Parts ID: {this.state.prosthetic.id}
              </div>
              <div className="card-body">
                <h5 className="card-title">{this.state.prosthetic.brand}</h5>
                <p className="card-text">{this.state.prosthetic.part}</p>
                <p className="card-text">
                  {" "}
                  length: {this.state.prosthetic.length}
                </p>
                <p className="card-text">
                  {" "}
                  width: {this.state.prosthetic.width}
                </p>
                <p className="card-text">
                  {" "}
                  weight: {this.state.prosthetic.weight}
                </p>
              </div>
            </div>
            <div className="map-container">
              <GoogleApiWrapper />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SingleProsthetic;