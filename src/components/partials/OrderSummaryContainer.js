import React, { Component } from 'react';

import OrderSummary from './presentational/OrderSummary';

class OrderSummaryContainer extends Component {
  handleDeleteItem = (e) => {
    e.preventDefault();

    const id = e.target.value;

    this.props.handleDeleteItem(id);
  }
  render() {
    return (
      <OrderSummary
        handleDeleteItem={this.handleDeleteItem}
        orderItems={this.props.orderItems}
      />
    );
  }
}

export default OrderSummaryContainer;
