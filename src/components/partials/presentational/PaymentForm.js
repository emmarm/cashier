import React from 'react';
import numeral from 'numeral';
import PropTypes from 'prop-types';

import PaymentReturnModal from '../presentational/PaymentReturnModal';

const PaymentForm = props => (
  <div className="group">
    <h2 className="group__title">Payment</h2>
    <div className="group__items--payment">
      <div className="payment-group">
        <p className="payment-group__title">Total</p>
        <p className="payment-group__amount">
          {numeral(props.orderTotal).format('0,0')} RP
        </p>
      </div>
      <form className="received__form" onSubmit={props.onCompleteOrder}>
        <div className="payment-group">
          <label className="payment-group__title" htmlFor="received">
            Received
          </label>
          {props.error && <p className="payment-error">{props.error}</p>}
          <input
            className="payment-group__amount--input"
            id="received"
            name="received"
            onBlur={props.onReceivedBlur}
            onChange={props.onReceivedChange}
            onFocus={props.onReceivedFocus}
            placeholder={0}
            type="number"
            value={props.received}
          />
        </div>
      </form>
      <button className="button--main-action" onClick={props.onCompleteOrder}>
        Complete Order
      </button>
    </div>
    <PaymentReturnModal
      amountChangeDue={props.received - props.orderTotal}
      changeDue={props.changeDue}
      handleCloseModal={props.handleCloseModal}
    />
  </div>
);

PaymentForm.propTypes = {
  changeDue: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  onCompleteOrder: PropTypes.func.isRequired,
  onReceivedBlur: PropTypes.func.isRequired,
  onReceivedChange: PropTypes.func.isRequired,
  onReceivedFocus: PropTypes.func.isRequired,
  orderTotal: PropTypes.number.isRequired,
  received: PropTypes.number.isRequired
};

export default PaymentForm;
