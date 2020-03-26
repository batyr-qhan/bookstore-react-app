import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.img} alt={item.img} className="" />
            </div>

            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.desc}</p>
              <p>
                <b>Price: {item.price}$</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing.</p>
    );

    // let result = this.props.items.length;
    // let total;

    // if (result) {
    //   total = this.props.total;
    // } else {
    //   total = "";
    // }

    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
          <h6>
            <b className="total">Total: {this.props.total}$</b>
          </h6>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems,
    total: state.total
  };
};

export default connect(mapStateToProps)(Cart);
