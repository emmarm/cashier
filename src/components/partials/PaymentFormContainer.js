import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PaymentForm from './presentational/PaymentForm';

const defaultState = {
  changeDue: false,
  error: '',
  received: 0
};

class PaymentFormContainer extends Component {
  state = { ...defaultState };

  onReceivedChange = e => {
    const received = Number(e.target.value);

    if (received) {
      this.setState(() => ({
        error: ''
      }));
    }

    this.setState(() => ({
      received
    }));
  };
  onReceivedBlur = e => {
    const received = Number(e.target.value) * 1000;
    this.setState(() => ({ received }));

    const diff = received - this.props.orderTotal;

    if (diff < 0) {
      this.setState(() => ({ error: 'Insufficient value' }));
    }
  };
  onReceivedFocus = e => {
    const received = Number(e.target.value) / 1000;
    this.setState(() => ({ received }));
  };
  onCompleteOrder = e => {
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
  };
  handleCloseModal = () => {
    this.setState(() => ({ ...defaultState }));

    this.props.clearForm();
  };
  render() {
    return (
      <PaymentForm
        changeDue={this.state.changeDue}
        error={this.state.error}
        handleCloseModal={this.handleCloseModal}
        onCompleteOrder={this.onCompleteOrder}
        onReceivedBlur={this.onReceivedBlur}
        onReceivedChange={this.onReceivedChange}
        onReceivedFocus={this.onReceivedFocus}
        orderTotal={this.props.orderTotal}
        received={this.state.received}
      />
    );
  }
}

PaymentFormContainer.propTypes = {
  clearForm: PropTypes.func.isRequired,
  handleCompleteOrder: PropTypes.func.isRequired,
  orderTotal: PropTypes.number.isRequired
};

export default PaymentFormContainer;
