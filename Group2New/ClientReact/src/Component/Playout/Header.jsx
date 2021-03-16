import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: sessionStorage.getItem("User"),
    };
  }
  render() {
    return (
      <header className="header ">
        <div className="head1">
          <img
            width="150px"
            height="150px"
            src="https://images.squarespace-cdn.com/content/v1/5bd0b1cba09a7e3cb8dfba08/1547412787562-WO1JKQZNYJDP3BZRJDQU/ke17ZwdGBToddI8pDm48kMANDQ_HZKr9DGXKlH5KK-1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyLvawlO8jsajkSKagGi9c1JPZ-AshZdveMjTS9_XucBwOjJn7T92THK8yhutbmd9o/rftotelclogo.png?format=300w"
            alt=""
            srcset=""
          />
        </div>
        <div className="head2">
          <h1>LaunDry Online</h1>
        </div>
        <div className="head3">
          <div className="head3-child">
            <div className="head3-1">
              <div
                id="google_translate_element"
                style={{ backgroundColor: "red" }}
              ></div>
            </div>
            <div className="head3-2">
              <form
                action="https://www.google.nl/search?q=google+search+bar"
                className="searchform"
                method="get"
                name="searchform"
                target="_blank"
              >
                <input
                  autoComplete="on"
                  className="form-control search"
                  name="q"
                  placeholder="Google Search Support ..."
                  required="required"
                  type="text"
                />
                {/* <button className="button" type="submit" style={{display:'none'}}>Search</button> */}
              </form>
            </div>
            <div className="head3-3">
              {/* nav-child */}
              <div>
                <Link
                  to="/"
                  style={{
                    textAlign: "center",
                    fontStyle: "Bold",
                    textDecoration: "none",
                    color: "deeppink",
                  }}
                >
                  Home
                </Link>
              </div>
              <div>
                <a
                  href="#/"
                  style={{
                    textAlign: "center",
                    fontStyle: "Bold",
                    textDecoration: "none",
                    color: "deeppink",
                  }}
                  onClick={(e) => {
                    window.location.assign("/delivery");
                    e.preventDefault();
                  }}
                >
                  Delivery
                </a>
              </div>
              {/* <div>
              <Link
                to="/services"
                style={{
                  textAlign: "center",
                  fontStyle: "Bold",
                  textDecoration: "none",
                  color: "deeppink",
                }}
              >
                Services
              </Link>
            </div>
            <div>
              <Link
                to="/users"
                style={{
                  textAlign: "center",
                  fontStyle: "Bold",
                  textDecoration: "none",
                  color: "deeppink",
                }}
              >
                Users
              </Link>
            </div> */}
              <div>
                <Link
                  to="/about"
                  style={{
                    textAlign: "center",
                    fontStyle: "Bold",
                    textDecoration: "none",
                    color: "deeppink",
                  }}
                >
                  About 
                </Link>
              </div>
              <div>
                <a
                  href="http://localhost:57180"
                  style={{
                    textAlign: "center",
                    fontStyle: "Bold",
                    textDecoration: "none",
                    color: "deeppink",
                  }}
                >
                  Employee
                </a>
              </div>
              {this.showLog()}
            </div>
          </div>
        </div>
      </header>
    );
  }
  showLog = () => {
    if (this.state.User === null) {
      return (
        <div>
          <Link
            to="/login"
            style={{
              textAlign: "center",
              fontStyle: "Bold",
              textDecoration: "none",
              color: "deeppink",
            }}
          >
            Sign In
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <Link
              to="/user"
              style={{
                textAlign: "center",
                fontStyle: "Bold",
                textDecoration: "none",
                color: "deeppink",
              }}
            >
              Your-Info
            </Link>
          </div>
          <div>
            <Link
              to="/services"
              style={{
                textAlign: "center",
                fontStyle: "Bold",
                textDecoration: "none",
                color: "deeppink",
              }}
            >
              Services
            </Link>
          </div>
          <div id="LogOut">
            <Link
              to="/"
              style={{
                textAlign: "center",
                fontStyle: "Bold",
                textDecoration: "none",
                color: "deeppink",
              }}
              onClick={(e) => {
                sessionStorage.removeItem("User");
                sessionStorage.removeItem("UserDetails");
                sessionStorage.removeItem("total");
                localStorage.removeItem("BASKET");
                window.location.assign("/");
                e.preventDefault();
              }}
            >
              Sign Out
            </Link>
          </div>
        </div>
      );
    }
  };
}

export default Header;
