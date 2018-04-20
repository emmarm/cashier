import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PaymentForm from './presentational/PaymentForm';

const defaultState = {
  received: 0,
  changeDue: false,
  error: ''
};

class PaymentFormContainer extends Component {
  state = { ...defaultState }

  onReceivedChange = (e) => {
    const received = Number(e.target.value);

    if (received) {
      this.setState(() => ({
        error: ''
      }));
    }

    this.setState(() => ({
      received
    }));
  }
  onReceivedBlur = (e) => {
    const received = Number(e.target.value) * 1000;
    this.setState(() => ({ received }));

    const diff = received - this.props.orderTotal;

    if (diff < 0) {
      this.setState(() => ({ error: 'Insufficient value' }));
    }
  }
  onReceivedFocus = (e) => {
    const received = Number(e.target.value) / 1000;
    this.setState(() => ({ received }));
  }
  onCompleteOrder = (e) => {
    e.preventDefault();

    if (this.state.received === 0) {
      this.setState(() => ({ error: 'Please input amount' }));
    }

    if (!this.state.error) {
      this.setState(() => ({
        changeDue: true
      }));

      this.props.handleCompleteOrder();
    }
  }
  handleCloseModal = () => {
    this.setState(() => ({ ...defaultState }));

    this.props.clearForm();
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
  orderTotal: PropTypes.number.isRequired,
  handleCompleteOrder: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired
};

export default PaymentFormContainer;
