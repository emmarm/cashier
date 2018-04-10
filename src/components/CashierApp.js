import React, { Component } from 'react';

import MenuFormContainer from './partials/MenuFormContainer';
import OrderSummary from './partials/OrderSummary';
import PaymentForm from './partials/PaymentForm';

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
  render() {
    return (
      <div>
        <MenuFormContainer
          updateOrderTotal={this.updateOrderTotal}
          updateOrderItems={this.updateOrderItems}
        />
        <OrderSummary
          orderItems={this.state.orderItems}
          orderTotal={this.state.orderTotal}
        />
        <PaymentForm
          orderTotal={this.state.orderTotal}
        />
      </div>
    );
  }
}

export default CashierApp;
