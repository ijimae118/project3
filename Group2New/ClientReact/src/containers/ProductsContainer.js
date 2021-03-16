import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Pagination from "./../Component/Playout/Pagination";
import { actAddToBasket, actChangeMessage } from "./../actions/index";
import Card from "./../Component/Playout/Card";
import Session from "./../Component/Playout/Session";
import callAPI from "./../Api/apiCaller";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      search: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //alert("A name was submitted: " + this.state.value);
    callAPI("TbServices/Search/" + this.state.value, "GET")
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          return this.setState({ search: res.data });
        }
      })
      .catch((err) => {
        console.log("Can't search" + err);
        this.setState({ search: "" });
        console.clear();
      });
    event.preventDefault();
  }
  render() {
    var { products } = this.props;
    var { onAddToBasket, onChangeMessage } = this.props;
    return (
      <div>
        <Session>
          <form onSubmit={this.handleSubmit} style={{ marginBottom: "10px" }}>
            <label>
              <b>
                <i>Search:</i>
              </b>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input
              className="btn btn-outline-info"
              type="submit"
              value="Submit"
            />
          </form>

          {this.showProducts(products)}
        </Session>
        {/* C2 */}
        <Pagination
          products={products}
          onAddToBasket={onAddToBasket}
          onChangeMessage={onChangeMessage}
        />
      </div>
    );
  }
  // C1
  showProducts(products) {
    var result = null;
    var { onAddToBasket, onChangeMessage } = this.props;
    if (products.length > 0) {
      if (this.state.search !== "" && this.state.search.length > 0) {
        result = this.state.search.map((product, index) => {
          return (
            <Card
              key={index}
              product={product}
              onAddToBasket={onAddToBasket}
              onChangeMessage={onChangeMessage}
            />
          );
        });
      } else {
        const items = products.slice(0, 3);
        result = items.map((product, index) => {
          return (
            <Card
              key={index}
              product={product}
              onAddToBasket={onAddToBasket}
              onChangeMessage={onChangeMessage}
            />
          );
        });
      }
    }
    return result;
  }
}

SessionContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  onAddToBasket: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToBasket: (product) => {
      dispatch(actAddToBasket(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);
