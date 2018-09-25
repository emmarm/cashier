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
  updateOrderItems = (orderItem) => {
    this.setState((prevState) => ({
      orderItems: [...prevState.orderItems, orderItem]
    }));
  };
  updateOrderTotal = (itemTotal) => {
    this.setState((prevState) => ({
      orderTotal: prevState.orderTotal + itemTotal
    }));
  };
  handleDeleteItem = (id) => {
    const item = this.state.orderItems.filter((orderItem) => orderItem.id === id)[0];

    this.setState((prevState) => ({
      orderItems: prevState.orderItems.filter((prevItem) => prevItem.id !== id),
      orderTotal: prevState.orderTotal - item.itemsTotal
    }));
  };
  handleCompleteOrder = () => {
    const orderedItems = this.state.orderItems.map(({
      type,
      size,
      number,
      addons
    }) => ({
      type,
      size,
      number,
      addons
    }));
    const { authUser } = this.props;
    const order = {
      items: [...orderedItems],
      total: this.state.orderTotal,
      time: moment().format('MMMM Do YYYY, HH:mm:ss'),
      seller: authUser
    };

    database.ref().push(order);
  };
  clearForm = () => {
    this.setState(() => ({ ...defaultState }));
  };
  render() {
    return (
      <div className="container">
        <Header
          handleLogOut={this.props.handleLogOut}
        />
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
          handleCompleteOrder={this.handleCompleteOrder}
          clearForm={this.clearForm}
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
