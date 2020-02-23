import React, { Component } from "react";

export default class BookItem extends Component {
  render() {
    return (
      <div>
        <p>Название: {this.props.book.title}</p>
        <p>Цена: {this.props.book.price}</p>
        <button >Add to Cart</button>
      </div>
    );
  }
}
