import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./Footer.jsx";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark mt-3">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            id="searchbarbutton"
            className="btn btn-outline-danger font-weight-bold text-center my-2 my-sm-0"
            type="submit"
          >
            SEARCH
          </button>
        </form>
        {/* <div className="logo" id="logo">
          <img src="https://storage.pixteller.com/designs/designs-images/2018-12-03/10/logo-1-5c0596089c591.png" />
        </div> */}

        <a className="navbar-brand" to="/" />
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div className="nav-item" />
                <Link className="nav-link" to="/AllParts">
                  Search Prosthetics
                </Link>
              </li>
              <li className="nav-item dropdown">
                <div className="nav-item" />
                <Link className="nav-link" to="/Chat">
                  Chat
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Donations">
                  Donate
                  </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/FAQ">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
