import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PaymentForm from './presentational/PaymentForm';

class PaymentFormContainer extends Component {
  state = {
    received: 0,
    changeDue: false,
    error: ''
  }
  onReceivedChange = (e) => {
    const received = Number(e.target.value);

    if (received) {
      this.setState(() => ({
        received,
        error: ''
      }));
    }
  }
  onReceivedBlur = (e) => {
    const received = Number(e.target.value) * 1000;
    this.setState(() => ({ received }));
  }
  onReceivedFocus = (e) => {
    const received = Number(e.target.value) / 1000;
    this.setState(() => ({ received }));
  }
  onCompleteOrder = (e) => {
    e.preventDefault();

    const diff = this.state.received - this.props.orderTotal;

    if (this.state.received === 0) {
      this.setState(() => ({ error: 'Please input amount' }));
    } else if (diff < 0) {
      this.setState(() => ({ error: 'Insufficient value' }));
    } else if (diff > 0) {
      this.setState(() => ({
        changeDue: true
      }));
    }
  }
  handleCloseModal = () => {
    this.setState(() => ({
      changeDue: false
    }));
  }
  render() {
    return (
      <PaymentForm
        orderTotal={this.props.orderTotal}
        error={this.state.error}
        onReceivedChange={this.onReceivedChange}
        onReceivedBlur={this.onReceivedBlur}
        onReceivedFocus={this.onReceivedFocus}
        received={this.state.received}
        onCompleteOrder={this.onCompleteOrder}
        changeDue={this.state.changeDue}
        handleCloseModal={this.handleCloseModal}
      />
    );
  }
}

PaymentFormContainer.propTypes = {
  orderTotal: PropTypes.number.isRequired
};

export default PaymentFormContainer;
