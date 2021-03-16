import React from "react";

function About() {
  return (
    <div>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Hello EveryOne ,Welcome to our website LaunDry Online</p>
        <p>We are the developer for this Website</p>
      </div>
      <h2 style={{ textAlign: "center", marginBottom: "100px" }}>
        Our Team Member
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="about-card">
              <img src="images/Or.jpg" alt="Thạch" style={{ width: "100%" }} />
              <div className="container">
                <h2>Thạch</h2>
                <h4 className="title">CEO &amp; Founder</h4>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>Thach@gmail.com</p>
                <p>
                  <button className="button" id="cont1">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="about-card">
              <img src="images/Red.jpg" alt="Thắng" style={{ width: "100%" }} />
              <div className="container">
                <h2>Thắng</h2>
                <h4 className="title">Art Director</h4>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>Thang@gmail.com</p>
                <p>
                  <button className="button" id="cont2">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="about-card">
              <img src="images/Pink.webp" alt="Đức" style={{ width: "100%" }} />
              <div className="container">
                <h2>Đức</h2>
                <h4 className="title">Designer</h4>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>Duc@gmail.com</p>
                <p>
                  <button className="button" id="cont3">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="about-card">
              <img
                src="images/Captain.jpg"
                alt="Lâm"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>Lâm</h2>
                <h4 className="title">CEO</h4>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>Lam@gmail.com</p>
                <p>
                  <button className="button" id="cont4">
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;