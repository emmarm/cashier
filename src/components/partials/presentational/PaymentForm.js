import React from 'react';
import PaymentReturnModal from '../presentational/PaymentReturnModal';

const PaymentForm = (props) => (
  <div>
    <h2>Payment</h2>
    <p>Total</p>
    {props.orderTotal}
    <form>
      <label htmlFor="received">Received</label>
      {props.error !== '' && <p>{props.error}</p>}
      <input
        type="number"
        id="received"
        name="received"
        onChange={props.onReceivedChange}
        onBlur={props.onReceivedBlur}
        onFocus={props.onReceivedFocus}
        value={props.received}
        placeholder={0}
        step={500}
      />
    </form>
    <button onClick={props.onCompleteOrder}>Complete Order</button>
    <PaymentReturnModal
      changeDue={props.changeDue}
      amountChangeDue={props.received - props.orderTotal}
      handleCloseModal={props.handleCloseModal}
    />
  </div>
);

export default PaymentForm;
