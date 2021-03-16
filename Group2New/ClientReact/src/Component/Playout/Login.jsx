import React, { Component } from "react";
import callAPI from "./../../Api/apiCaller";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      Password: "",
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
    var { UserName, Password } = this.state;
    var { history } = this.props;
    callAPI("TbUsers", "GET")
      .then((res) => {
        var Singin = null;

        res.data.forEach((e) => {
          //console.log(e);
          if (UserName === e.userName) {
            return (Singin = e);
          }
        });

        if (Singin !== null) {
          if (Singin.password === Password) {
            sessionStorage.setItem("User", Singin.id);
            sessionStorage.setItem("UserDetails", JSON.stringify(Singin));
            //history.goBack();
            if (sessionStorage.getItem("User")) {
              history.push("/services");
              window.location.reload();
            }
          } else {
            alert("Password is invalid");
          }
        } else {
          alert("UserName is invalid !!!");
        }
      })
      .catch((err) => {
        alert("Sorry, Pleaze reload() and Try again", err);
      });
  };
  render() {
    var { UserName, Password } = this.state;
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
            id="Password"
            className="form-control"
            placeholder="*********"
            value={Password}
            required="Please enter password !!!"
            onChange={this.onChange}
          />

          <input type="submit" className="btn btn-blue" value="Sign In" />
        </form>
        <b>
          Don't have an account?
          <red>
            <Link
              to="/register"
              style={{
                color: "deeppink",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Sign Up Now
            </Link>
          </red>
        </b>
      </div>
    );
  }
}

export default Login;
