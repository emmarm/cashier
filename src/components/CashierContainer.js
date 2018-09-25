import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import database from '../firebase/firebase';
import Header from './partials/presentational/Header';
import MenuFormContainer from './partials/MenuFormContainer';
import OrderSummaryContainer from './partials/OrderSummaryContainer';
import PaymentFormContainer from './partials/PaymentFormContainer';

const defaultState = {
  orderItems: [],
  orderTotal: 0
};

class CashierContainer extends Component {
  state = { ...defaultState };

  componentDidMount() {
    try {
      const jsonItems = localStorage.getItem('orderItems');
      const jsonTotal = localStorage.getItem('orderTotal');
      const orderItems = JSON.parse(jsonItems);
      const orderTotal = JSON.parse(jsonTotal);

      if (orderItems) {
        this.setState(() => ({
          orderItems,
          orderTotal
        }));
      }
    } catch (e) {
      // if error, don't load JSON data
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.orderItems.length !== prevState.orderItems.length) {
      const jsonItems = JSON.stringify(this.state.orderItems);
      const jsonTotal = JSON.stringify(this.state.orderTotal);
      localStorage.setItem('orderItems', jsonItems);
      localStorage.setItem('orderTotal', jsonTotal);
    }
  }
  updateOrderItems = orderItem => {
    this.setState(prevState => ({
      orderItems: [...prevState.orderItems, orderItem]
    }));
  };
  updateOrderTotal = itemTotal => {
    this.setState(prevState => ({
      orderTotal: prevState.orderTotal + itemTotal
    }));
  };
  handleDeleteItem = id => {
    const item = this.state.orderItems.filter(
      orderItem => orderItem.id === id
    )[0];

    this.setState(prevState => ({
      orderItems: prevState.orderItems.filter(prevItem => prevItem.id !== id),
      orderTotal: prevState.orderTotal - item.itemsTotal
    }));
  };
  handleCompleteOrder = () => {
    const orderedItems = this.state.orderItems.map(
      ({ addons, number, size, type }) => ({
        addons,
        number,
        size,
        type
      })
    );
    const { authUser } = this.props;
    const order = {
      items: [...orderedItems],
      seller: authUser,
      time: moment().format('MMMM Do YYYY, HH:mm:ss'),
      total: this.state.orderTotal
    };

    database.ref().push(order);
  };
  clearForm = () => {
    this.setState(() => ({ ...defaultState }));
  };
  render() {
    return (
      <div className="container">
        <Header handleLogOut={this.props.handleLogOut} />
        <MenuFormContainer
          updateOrderItems={this.updateOrderItems}
          updateOrderTotal={this.updateOrderTotal}
        />
        <OrderSummaryContainer
          handleDeleteItem={this.handleDeleteItem}
          orderItems={this.state.orderItems}
        />
        <PaymentFormContainer
          clearForm={this.clearForm}
          handleCompleteOrder={this.handleCompleteOrder}
          orderTotal={this.state.orderTotal}
        />
      </div>
    );
  }
}

CashierContainer.propTypes = {
  authUser: PropTypes.string.isRequired,
  handleLogOut: PropTypes.func.isRequired
};

export default CashierContainer;
