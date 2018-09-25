import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OrderSummary from './presentational/OrderSummary';

class OrderSummaryContainer extends Component {
  handleDeleteItem = e => {
    e.preventDefault();

    const id = e.target.value;

    this.props.handleDeleteItem(id);
  };
  render() {
    return (
      <OrderSummary
        handleDeleteItem={this.handleDeleteItem}
        orderItems={this.props.orderItems}
      />
    );
  }
}

OrderSummaryContainer.propTypes = {
  handleDeleteItem: PropTypes.func.isRequired,
  orderItems: PropTypes.arrayOf(
    PropTypes.shape({
      addons: PropTypes.arrayOf(PropTypes.string),
      id: PropTypes.string.isRequired,
      itemsTotal: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
      size: PropTypes.string,
      type: PropTypes.string.isRequired
    })
  ).isRequired
};

export default OrderSummaryContainer;
