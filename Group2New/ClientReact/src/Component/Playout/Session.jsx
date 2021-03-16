import React, { Component } from "react";

class Session extends Component {
  render() {
    //console.log(this.props.children);
    return (
      <div>
        <h2
          style={{
            paddingBottom: "2%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>
            Popular Services{" "}
            <img
              src="https://laundrapp.com/app/themes/laundrapp/dist/images/laundrapp_76b7d4fb.svg"
              alt="# "
            />
          </span>
          <div class="input-group" style={{ width: "25%" }}>
            <input
              id="search"
              type="search"
              class="form-control"
              placeholder="Exist Services..."
              aria-label="Search"
              aria-describedby="search-addon"
              title="If it not working.Pleaze reload page and try again"
            />
            <i class="fas fa-search-plus"></i>
          </div>
        </h2>
        <div className="card-deck">
          <div id="cover-item" className="cover-item">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Session;
