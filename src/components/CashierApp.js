import React, { Component } from 'react';

import MenuFormContainer from './partials/MenuFormContainer';
import OrderSummaryContainer from './partials/OrderSummaryContainer';
import PaymentFormContainer from './partials/PaymentFormContainer';

class CashierApp extends Component {
  state = {
    orderItems: [],
    orderTotal: 0
  }

  updateOrderItems = (orderItem) => {
    this.setState((prevState) => ({
      orderItems: [...prevState.orderItems, orderItem]
    }));
  }
  updateOrderTotal = (itemTotal) => {
    this.setState((prevState) => ({
      orderTotal: prevState.orderTotal + itemTotal
    }));
  }
  handleDeleteItem = (id) => {
    const item = this.state.orderItems.filter((orderItem) => orderItem.id === id)[0];

    this.setState((prevState) => ({
      orderItems: prevState.orderItems.filter((prevItem) => prevItem.id !== id),
      orderTotal: prevState.orderTotal - item.itemsTotal
    }));
  }
  render() {
    return (
      <div className="container">
        <MenuFormContainer
          updateOrderTotal={this.updateOrderTotal}
          updateOrderItems={this.updateOrderItems}
        />
        <OrderSummaryContainer
          orderItems={this.state.orderItems}
          handleDeleteItem={this.handleDeleteItem}
        />
        <PaymentFormContainer
          orderTotal={this.state.orderTotal}
        />
      </div>
    );
  }
}

export default CashierApp;
