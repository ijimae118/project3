import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ width: "100%", margin: "0", padding: "0" }}>
      <div className="body">
        <div className="banner1">
          <img src="images/slidebaner3.jpg" alt="slider1" />
          <div className="text-box text-box1">
            <h1>Provie Top laundry & Dry cleaning services</h1>
            <span></span>
            <Link to="/login">
              <button type="submit">LOGIN</button>
            </Link>
          </div>
        </div>
        <div className="banner2">
          <img src="images/slidebaner2.jpg" alt="slider2" />
          <div className="text-box text-box2">
            <h1
              style={{ color: "white", textShadow: "10px 10px 10px 10px red" }}
            >
              LOGIN TO SEE OUR SERVICES !
            </h1>
            <span></span>
            <Link to="/login">
              <button type="submit">LOGIN</button>
            </Link>
          </div>
        </div>
        <div className="banner3">
          <img src="images/slidebaner5.jpg" alt="slider3" />
          <div className="text-box text-box3">
            <h1>MEETING YOUR NEEDS & BUSY LIFESTYLE</h1>
            <span></span>
            <Link to="/login">
              <button type="submit">LOGIN</button>
            </Link>
          </div>
        </div>
        <div className="banner4">
          <img src="images/slidebanner4.jpg" alt="slider4" />
          <div className="text-box text-box4">
            <h1>Free Pick Up & Delivery</h1>
            <span></span>
            <Link to="/login">
              <button type="submit">LOGIN</button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <h1 className="title">WHY CHOOSE US !</h1>
          <div className="row">
            <div className="col-sm-4">
              <div className="home-bot home-bot-left">
                <div className="home-icon">
                  <img src="images/contact1.jpg" alt="timepick" />
                </div>
                <div className="home-info">
                  <h1>Easy Contact</h1>
                  <p>Easy to place an order on the website.</p>
                  <p>
                    Contact us and we’ll keep in touch with you in whichever way
                    fits your needs.{" "}
                  </p>
                  <p>
                    We can be reached via our Hotline, SMS, Email, Skype or
                    Viber.
                  </p>
                  <p>
                    We have both Vietnamese and English speaking staff to assist
                    you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="home-bot home-bot-center">
                <div className="home-icon">
                  <img src="images/pay1.jpg" alt="timepick" />
                </div>
                <div className="home-info">
                  <h1>Affordable Pricing</h1>
                  <p>
                    We believe in giving our clients the best value for their
                    money.
                  </p>
                  <p>
                    Pricing is straighforward and reflects our dedication to
                    providing affordable pricing while also not compromising on
                    service or quality cleaning products
                  </p>
                  <p>Free pick up and Delivery.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="home-bot">
                <div className="home-icon">
                  <img src="images/5sao.jpg" alt="timepick" />
                </div>
                <div className="home-info">
                  <h1>Reliable & Hassle-Free Service</h1>
                  <p>
                    Frustrated with your current cleaner who does not deliver on
                    time or provides poor communication and service?.
                  </p>
                  <p>
                    WE were created to solve your laundry and dry cleaning
                    problems with exceptional service!.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
