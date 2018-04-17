import React from 'react';
import Modal from 'react-modal';

const PaymentReturnModal = (props) => (
  <Modal
    isOpen={props.changeDue}
    onRequestClose={props.handleCloseModal}
    contentLabel="Change Due"
    closeTimeoutMS={200}
  >
    <div>
      <h2>Change Due</h2>
      <p>{props.amountChangeDue}</p>
      <button
        className="button"
        onClick={props.handleCloseModal}
      >
        Completed
      </button>
    </div>
  </Modal>
);

export default PaymentReturnModal;
