import React, { Component } from "react";
import Userorder from "./Userorder";
import callAPI from "./../../Api/apiCaller";
import { Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    var detail = JSON.parse(sessionStorage.getItem("UserDetails"));

    this.state = {
      Id: detail.id,
      UserName: detail.userName,
      Password: detail.password,
      Address: detail.address,
      Telephone: detail.telephone,
      Email: detail.email,
    };
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSave = (e) => {
    e.preventDefault();
    var { Id, UserName, Password, Address, Telephone, Email } = this.state;
    //var { history } = this.props;
    // -----------Edit-----------
    callAPI("TbUsers", "PUT", {
      Id: Id,
      UserName: UserName,
      Password: Password,
      Address: Address,
      Telephone: Telephone,
      Email: Email,
    })
      .then((res) => {
        //console.log(res.config.data);
        sessionStorage.setItem("UserDetails", res.config.data);
        alert("Edit,Success");
        // window.location.reload();
        // e.preventDefault();
      })
      .catch((err) => {
        alert("Sorry, Pleaze reload() or Try again", err);
      });
  };

  render() {
    var { Id, UserName, Password, Address, Telephone, Email } = this.state;
    return (
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "50%" }}>
          <h2>👁‍🗨</h2>
          <form
            onSubmit={this.onSave}
            //className="form-group"
            style={{
              //backgroundColor: "#474e5d",
              backgroundImage:
                "linear-gradient(to bottom right,rgb(156,248,100),lightskyblue,rgb(36, 36, 255))",
              color: "deepskyblue",
              width: "275px",
              border: "none",
              overflow: "visible",
            }}
          >
            <label>
              <b>Your UserId</b>
            </label>
            <input
              type="number"
              name="Id"
              id="Id"
              readOnly
              //className="form-control"
              placeholder="Id"
              value={Id}
              required="Please enter Id !!!"
              onChange={this.onChange}
            />
            <label>
              <b>Your UserName</b>
            </label>
            <input
              type="text"
              name="UserName"
              id="UserName"
              //className="form-control"
              placeholder="UserName"
              value={UserName}
              required="Please enter username !!!"
              onChange={this.onChange}
            />
            <label>
              <b>Your PassWord</b>
            </label>
            <input
              type="password"
              name="Password"
              id="password"
              //className="form-control"
              value={Password}
              required="Please enter password !!!"
              onChange={this.onChange}
            />

            <label>
              <b>Address</b>
            </label>
            <input
              type="text"
              name="Address"
              id="Address"
              //className="form-control"
              placeholder="Address"
              value={Address}
              required="Please enter Address !!!"
              onChange={this.onChange}
            />
            <label>
              <b>Email</b>
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              //className="form-control"
              placeholder="Address"
              value={Email}
              required="Please enter Email !!!"
              onChange={this.onChange}
            />
            <label>
              <b>Telephone</b>
            </label>
            <input
              type="text"
              name="Telephone"
              id="Telephone"
              //className="form-control"
              placeholder="Telephone number"
              value={Telephone}
              pattern="[0-9]{10,12}"
              title="range 10~12 digit"
              required="Please enter telephone number !!!"
              onChange={this.onChange}
            />
            <input
              type="submit"
              title="Edit"
              className="btn btn-blue"
              value="✔"
            />
          </form>
          <Link
            to="/services"
            style={{ color: "deeppink", textDecoration: "none" }}
          >
            <b>GoBack</b>
          </Link>
        </div>
        <div>
          <Userorder />
        </div>
      </div>
    );
  }
}

export default User;
