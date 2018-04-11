import React, { Component } from 'react';

import PaymentForm from './presentational/PaymentForm';

class PaymentFormContainer extends Component {
  state = {
    received: 0,
    changeDue: false,
    error: ''
  }
  onReceivedChange = (e) => {
    const received = e.target.value;
    this.setState(() => ({ received }));
  }
  onReceivedBlur = (e) => {
    const received = e.target.value * 1000;
    this.setState(() => ({ received }));
  }
  onReceivedFocus = (e) => {
    const received = e.target.value / 1000;
    this.setState(() => ({ received }));
  }
  onCompleteOrder = () => {
    const diff = this.state.received - this.props.orderTotal;

    if (diff < 0) {
      this.setState(() => ({
        error: 'Please input amount received'
      }));
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

export default PaymentFormContainer;
