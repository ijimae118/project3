import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="text-white text-center text-lg-start">
      {/* Grid container */}
      <div className="container p-4">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Laundry Online</h5>
            <p>
              Shuttle Laundry is a well-established laundry service by bringing
              the convenience to the customer’s door step. It offer picking up
              and delivery customer’s laundry via outsourcing extenal logistic
              company.
              <ul>
                <div>
                  <li>
                    <a
                      href="#!"
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      <Link
                        to="/"
                        style={{
                          textDecoration: "none",
                          color: "red",
                          fontSize: 13,
                        }}
                      >
                        Address: 590 Cach Mang Thang Tam; Phuong 11; Quan 3;
                        723564 HCMC, Viet Nam
                      </Link>
                    </a>
                  </li>
                </div>
              </ul>
            </p>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Home
                  </Link>
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/delivery"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Delivery
                  {/* <Link
                    to="/delivery"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Delivery
                  </Link> */}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Sign In
                  </Link>
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    About 
                  </Link>
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Socials</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://vi-vn.facebook.com" className="text-white">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=vi" className="text-white">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.google.com" className="text-white">
                  <i class="fab fa-google"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com" className="text-white">
                  <i class="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </div>
      {/* Grid container */}
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.5092022311865!2d106.66652273200873!3d10.786244452036637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed2392c44df%3A0xd2ecb62e0d050fe9!2sFPT-Aptech%20Computer%20Education%20HCM!5e0!3m2!1svi!2s!4v1614824227806!5m2!1svi!2s"
          height="{450px}"
          style={{ border: "0", width: "1140px" }}
          allowfullscreen
          loading="lazy"
          title="map"
        />
      </div>
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          class="fb-like"
          data-href="http://localhost:3000"
          data-width=""
          data-layout="box_count"
          data-action="like"
          data-size="small"
          data-share="true"
        ></div>
        ❤️🧡💛💚💙💜
        <a
          className="text-white"
          href="http://localhost:3000"
          style={{ fontSize: "20px" }}
        >
          <b> © 2020: LaundryOnline.com </b>
        </a>
        <div>
          <audio controls muted autoPlay preload="none" loop>
            <source src="music/song.webm" type="audio/ogg" />
            <source src="music/song.webm" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
