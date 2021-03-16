import React from "react";

function Delivery() {
  return (
    <div className="order">
      <div
        className="order-header"
        style={{ backgroundImage: "images/depanel.jpg" }}
      >
        <div
          class="jumbotron container"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            backgroundImage:
              "linear-gradient(to right,lightskyblue,rgb(255, 255, 255),rgb(255, 255, 255))",
          }}
        >
          <div
            style={{
              display: "flex",
              flexFlow: "column",
              alignSelf: "center",
            }}
          >
            <h1>Delivery</h1>
            <p>We always try to provide the best services for you</p>
          </div>
          <img
            src="images/depanel.jpg"
            alt="panel"
            srcset="images/depanel.jpg"
            width="30%"
            height="150px"
          />
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div className="deli">
                <div className="deli-icon">
                  <img src="images/timepick.jpg" alt="timepick" />
                </div>
                <div className="deli-info">
                  <h1>Pick Up</h1>
                  <p>Easy to place an order on the website.</p>
                  <p>
                    Text/call us via WhatsApp, Telephone:{" "}
                    <span>+84 123456789</span>{" "}
                  </p>
                  <p>
                    We will arrange a pickup at your hotel within 60 minutes.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div className="deli">
                <div className="deli-icon">
                  <img src="images/iconlaundry.jpg" alt="timepick" />
                </div>
                <div className="deli-info">
                  <h1>Laundry</h1>
                  <p>
                    We follow instruction tags and specifications you noted to
                    wash, dry and press.
                  </p>
                  <p>Air-dry in the sun and wind is our priority.</p>
                  <p>We ensure to make your clothes clean and fresh.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div className="deli">
                <div className="deli-icon">
                  <img src="images/icondelivery.jpg" alt="timepick" />
                </div>
                <div className="deli-info">
                  <h1>Delivery</h1>
                  <p>
                    Your clean and fresh clothes will be dropped off to your
                    hotel same day or next day.
                  </p>
                  <p>
                    We will inform you via WhatsApp or email when dropping off.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="order-body">
        <div className="order-right">
          <div style={{ textAlign: "center" }}>
            <div class="container">
              <div className="delivery-list">
                <h1>Pricing</h1>
                <ul>
                  <li>Included: Laundry, Dry, Fold</li>
                  <li>
                    we wash with cool water and dry at 60 degrees with machine.
                    Please let me know if you have special requests.
                  </li>
                  <li>Free pickup & delivery</li>
                  <li>Pay by cash (all currencies are accepted)</li>
                  <li>
                    Pay by Credit Card (Visa/Master/American Express/Online
                    payment link)
                  </li>
                  <li>Openning 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="order-left">
          <div>
            <button className="btn btn-warning" id="ctu">
              Contact Us
            </button>
          </div>
          <div
            class="fb-comments"
            data-href="http://localhost:3000/delivery"
            data-width=""
            data-numposts="5"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
