import React, { Component } from "react";
import callAPI from "./../../Api/apiCaller";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      Password: "",
      Address: "",
      Telephone: "",
      Email: "",
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
    var { UserName, Password, Address, Telephone, Email } = this.state;
    var { history } = this.props;
    //-----------Check-----------
    callAPI("TbUsers", "GET")
      .then((res) => {
        var Singup = null;

        res.data.forEach((e) => {
          //console.log(e);
          if (UserName === e.userName) {
            return (Singup = e);
          }
        });

        if (Singup !== null) {
          alert("Sorry...username already taken !!!");
        } else {
          // -----------Regis-----------
          callAPI("TbUsers", "POST", {
            UserName: UserName,
            Password: Password,
            Address: Address,
            Telephone: Telephone,
            Email: Email,
          })
            .then((res) => {
              //console.log(res);
              alert("Register,Success");
              history.push("/login");
            })
            .catch((err) => {
              alert("Sorry, Pleaze reload() or Try again", err);
            });
        }
      })
      .catch((err) => {
        alert("Sorry,Some thing error.Pleaze reload() and Try again", err);
      });
  };
  render() {
    var { UserName, Password, Address, Telephone, Email } = this.state;
    return (
      <div>
        <form
          onSubmit={this.onSave}
          className="form-group"
          style={{
            //backgroundColor: "#474e5d",
            backgroundImage:
              "linear-gradient(to bottom right,rgb(156, 248, 248),lightskyblue,rgb(36, 36, 255))",
            color: "deepskyblue",
            width: "275px",
            border: "2px solid white",
            overflow: "visible",
            borderRight: "none",
          }}
        >
          <label>
            <b>UserName</b>
          </label>
          <input
            type="text"
            name="UserName"
            id="UserName"
            className="form-control"
            placeholder="UserName"
            value={UserName}
            required="Please enter username !!!"
            onChange={this.onChange}
          />

          <label>
            <b>PassWord</b>
          </label>
          <input
            type="password"
            name="Password"
            id="password"
            className="form-control"
            placeholder="*********"
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
            className="form-control"
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
            className="form-control"
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
            className="form-control"
            placeholder="Telephone number"
            value={Telephone}
            pattern="[0-9]{10,12}"
            title="range 10~12 digit"
            required="Please enter telephone number !!!"
            onChange={this.onChange}
          />

          <input type="submit" className="btn btn-blue" value="Sign Up" />
        </form>
        <Link to="/login" style={{ color: "deeppink", textDecoration: "none" }}>
          <b>GoBack</b>
        </Link>
      </div>
    );
  }
}

export default Register;
