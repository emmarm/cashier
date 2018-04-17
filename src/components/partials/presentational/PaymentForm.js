import React from 'react';
import numeral from 'numeral';
import PropTypes from 'prop-types';

import PaymentReturnModal from '../presentational/PaymentReturnModal';

const PaymentForm = (props) => (
  <div className="group">
    <h2 className="group__title">Payment</h2>
    <div className="group__items--payment">
      <div className="payment-group">
        <p className="payment-group__title">Total</p>
        <p className="payment-group__amount">
          {numeral(props.orderTotal).format('0,0')}
        </p>
      </div>
      <form className="received__form">
        <div className="payment-group">
          <label className="payment-group__title" htmlFor="received">
            Received
          </label>
          {props.error && <p>{props.error}</p>}
          <input
            className="payment-group__amount--input"
            type="number"
            id="received"
            name="received"
            onChange={props.onReceivedChange}
            onBlur={props.onReceivedBlur}
            onFocus={props.onReceivedFocus}
            value={props.received}
            placeholder={0}
          />
        </div>
      </form>
      <button className="button--main-action" onClick={props.onCompleteOrder}>
        Complete Order
      </button>
    </div>
    <PaymentReturnModal
      changeDue={props.changeDue}
      amountChangeDue={props.received - props.orderTotal}
      handleCloseModal={props.handleCloseModal}
    />
  </div>
);

PaymentForm.propTypes = {
  orderTotal: PropTypes.number.isRequired,
  error: PropTypes.string.isRequired,
  onReceivedChange: PropTypes.func.isRequired,
  onReceivedBlur: PropTypes.func.isRequired,
  onReceivedFocus: PropTypes.func.isRequired,
  received: PropTypes.number.isRequired,
  onCompleteOrder: PropTypes.func.isRequired,
  changeDue: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired
};

export default PaymentForm;
