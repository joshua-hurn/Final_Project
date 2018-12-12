import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import UpperCard from "../components/Cards/UpperCard";

class UpperLimbs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prosthetics: []
    };
  }
  async componentDidMount() {
    let res = await fetch("/api/prosthetics");
    let prosthetics = await res.json();
    let upperprosthetics = prosthetics.filter(item => {
      if (item.placement == "Upperlimb") {
        return true;
      }
      return false;
    });
    console.log(prosthetics);
    this.setState({ prosthetics: upperprosthetics });
  }
  catch(e) {
    console.log(e);
  }

  renderProsthetics() {
    return this.state.prosthetics.map(prosthetic => {
      return <UpperCard key={prosthetic.id} prosthetic={prosthetic} />;
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron
          title="Upper Limb Selection"
          subtitle="See What's Available"
        />
        <div className="m-5 text-center">
          <h2 className="blackpacifico outline display-4">Welcome to PBP</h2>
          <h3 className="redbungee outline">
            We have a selection of upper limb prosthetics from our authorized
            donors.
          </h3><br/>
          <div className="d-flex flex-wrap justify-content-center" style={{ background: "linear-gradient(rgba(0,0,0, 0.55), rgba(0,0,0,0.55))", borderRadius: ".5em"}}>{this.renderProsthetics()}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default UpperLimbs;
