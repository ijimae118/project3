import React, { Component } from "react";
import callAPI from "./../../Api/apiCaller";
import axios from "axios";
var QRCode = require("qrcode.react");

class CartResult extends Component {
  constructor(props) {
    super(props);
    var detail = JSON.parse(sessionStorage.getItem("UserDetails"));
    this.state = {
      UserId: sessionStorage.getItem("User")
        ? parseInt(sessionStorage.getItem("User"))
        : 0, //=>like name in input
      Consignee: "",
      Address: detail.address,
      Sdt: detail.telephone,
      Description:
        "Total :" +
        sessionStorage.getItem("total") +
        "$ Your Services: " +
        localStorage.getItem("BASKET") +
        " Date Order: " +
        new Date().toLocaleDateString(),
      Process: "In process",
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
    //this.state.Description='Total :'+sessionStorage.getItem('total')+"$ Your Services: "+localStorage.getItem('BASKET')+" Date Order: "+new Date().toLocaleDateString();
    this.setState({
      Description:
        "Total :" +
        sessionStorage.getItem("total") +
        "$ Your Services: " +
        localStorage.getItem("BASKET") +
        " Date Order: " +
        new Date().toLocaleDateString(),
    });
  };
  onSave = (e) => {
    //this.state.Description='Total :'+sessionStorage.getItem('total')+"$ Your Services: "+localStorage.getItem('BASKET')+" Date Order: "+new Date().toLocaleDateString();
    this.setState({
      Description:
        "Total :" +
        sessionStorage.getItem("total") +
        "$ Your Services: " +
        localStorage.getItem("BASKET") +
        " Date Order: " +
        new Date().toLocaleDateString(),
    });

    e.preventDefault();
    //console.log(this.state);

    // Send Post (Edit)

    var { UserId, Consignee, Address, Sdt, Description, Process } = this.state;
    callAPI("TbInvoices", "POST", {
      UserId: UserId,
      Consignee: Consignee,
      Address: Address,
      Sdt: Sdt,
      Description: Description,
      Process: Process,
    })
      .then((res) => {
        //console.log(res);
        localStorage.removeItem("BASKET");
        alert("Success,We will be going contact you soon ❤");
        window.location.assign("/user");
      })
      .catch((err) => {
        alert("Sorry, Pleaze reload() and Try again", err);
      });

    // End Post
    //RapidApi-SMS

    //const form = new FormData();
    //form.append("soundfile", "Red.jpg");
    const options = {
      method: "POST",
      url:
        "https://sms-voice-messages.p.rapidapi.com/call/+12167101101/" +
        this.state.Sdt, //=>/call/from_number/to_number
      headers: {
        "content-type":
          "multipart/form-data; boundary=---011000010111000001101001",
        "x-rapidapi-key": "830f517425msh9cc0a683b01a23ap1f97dejsna758e84b893c",
"x-rapidapi-host": "sms-voice-messages.p.rapidapi.com",
      },
      data:
        "Your have select services form LaundryOnline: " +
        this.state.Description +
        " Thanks you for choosing us", //"[form]",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    //EndSMS-Rapidapi
  };

  render() {
    var { UserId, Consignee, Address, Sdt, Description, Process } = this.state;
    //Description = 'Total :'+sessionStorage.getItem('total')+"$ Your Services: "+localStorage.getItem('BASKET')+" Date Order: "+new Date().toLocaleDateString();
    var { basket } = this.props;
    //console.log(basket);
    return (
      <tr>
        <td colSpan={3} />
        <td>
          <h4>
            <strong>Total payment amount</strong>
          </h4>
          {/* <h4>
                <strong>VAT</strong>
                </h4>
                <h4>
                <strong>Tổng Tiền</strong>
                </h4> */}
        </td>
        <td>
          <h4>
            <strong>{this.showTotalAmount(basket)} (USD)</strong>
          </h4>
          {/* <h4>
                <strong>10%</strong>
                </h4>
                <h4>
                <strong>{this.showTotalAmount(basket)+this.showTotalAmount(basket)*10/100}</strong>
                </h4> */}
        </td>
        <td colSpan={3}>
          <button
            type="button"
            className="btn btn-primary waves-effect waves-light"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Complete purchase
            <i className="fa fa-angle-right right" />
          </button>
        </td>
        {/* Modal Start */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Your Services
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
{this.showYouCart(basket)}
                    <tr class="total">
                      <th scope="row">SUM</th>
                      <td>Total</td>
                      <td>{this.showTotalAmount(basket)}</td>
                      <td>{new Date().toLocaleDateString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="modal-footer"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <div className="qrcode">
                  <QRCode
                    value={
                      "Total :" +
                      this.showTotalAmount(basket) +
                      "$ Your Services: " +
                      this.showYouQr(basket) +
                      " Date Order: " +
                      new Date().toLocaleDateString()
                    }
                    size={120}
                    bgColor="#ffa500"
                    level="Q"
                  />
                </div>
                <div id="paypal-button-container"></div>
                {/* --------From------------ */}
                <form onSubmit={this.onSave} className="form-group">
                  <label>UserId</label>
                  <input
                    type="number"
                    name="UserId"
                    id="UserId"
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                    value={UserId}
                    onChange={this.onChange}
                    required
                    readOnly
                  />

                  <label>Consignee</label>
                  <input
                    type="text"
                    name="Consignee"
                    id="Consignee"
                    className="form-control"
                    placeholder="Please enter . or your name or the consignee's name"
                    aria-describedby="helpId"
                    value={Consignee}
                    onChange={this.onChange}
                    required
                    title="Please enter . or your name or the consignee's name"
                  />

                  <label>Address</label>
                  <input
                    type="text"
                    name="Address"
                    id="Address"
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                    value={Address}
                    required
                    onChange={this.onChange}
                  />

                  <label>Sdt</label>
                  <input
                    type="text"
                    name="Sdt"
                    id="Sdt"
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                    value={Sdt}
pattern="[0-9]{10,12}"
                    title="Phone numbers range from 10-12 numbers"
                    required="true"
                    onChange={this.onChange}
                  />

                  <div style={{ display: "none" }}>
                    <label>Description</label>
                    <input
                      type="text"
                      name="Description"
                      id="Description"
                      className="form-control"
                      placeholder
                      aria-describedby="helpId"
                      value={Description}
                      //defaultValue={'Total :'+this.showTotalAmount(basket)+"$ Your Services: "+this.showYouQr(basket)+" Date Order: "+new Date().toLocaleDateString()}
                      onChange={this.onChange}
                    />

                    <label>Process</label>
                    <input
                      type="text"
                      name="Process"
                      id="Process"
                      className="form-control"
                      placeholder
                      aria-describedby="helpId"
                      value={Process}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    // onClick={() => {
                    //   alert("Pleaze fill out all fields.");
                    // }}
                    className="btn btn-secondary"
                    value="Pay By Cash"
                  />
                </form>

                {/* --------From End-------- */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal End */}
      </tr>
    );
    //Description = 'Total :'+sessionStorage.getItem('total')+"$ Your Services: "+localStorage.getItem('BASKET')+" Date Order: "+new Date().toLocaleDateString();
  }
  showTotalAmount = (basket) => {
    var total = 0;
    if (basket.length > 0) {
      for (let i = 0; i < basket.length; i++) {
        total += basket[i].product.price * basket[i].quantity;
      }
    }
    sessionStorage.setItem("total", total);
    return total;
  };
  showTotalQuantity = (basket) => {
    var total = 0;
    if (basket.length > 0) {
      for (let i = 0; i < basket.length; i++) {
        total += basket[i].quantity;
      }
    }
    return total;
  };
  showYouCart = (basket) => {
    var total = [];
    if (basket.length > 0) {
      for (let i = 0; i < basket.length; i++) {
        total.push(
          <tr>
            <th scope="row">{i + 1}</th>
            <td>{basket[i].product.name}</td>
            <td>{basket[i].product.price}</td>
            <td>{basket[i].quantity}</td>
          </tr>
        );
}
    }
    return total;
  };

  showYouQr = (basket) => {
    var total = [];
    if (basket.length >= 0) {
      for (let i = 0; i < basket.length; i++) {
        total.push(
          `[
                    id:${i + 1}
                    ,name:${basket[i].product.name}
                    ,price:${basket[i].product.price}
                    ,quantity:${basket[i].quantity}
                ]`
        );
      }
    }
    return total;
  };
}

export default CartResult;