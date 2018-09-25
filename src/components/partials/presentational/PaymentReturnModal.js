import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import numeral from 'numeral';

const modalClass = {
  base: 'modal',
  afterOpen: 'modal--after-open',
  beforeClose: 'modal--before-close'
};

const PaymentReturnModal = props => (
  <Modal
    className={modalClass}
    closeTimeoutMS={200}
    contentLabel="Change Due"
    isOpen={props.changeDue}
    onRequestClose={props.handleCloseModal}
  >
    <div className="payment-modal__container">
      <h2 className="payment-modal__title">Change Due</h2>
      <p className="payment-modal__amount">
        {numeral(props.amountChangeDue).format('0,0')} RP
      </p>
      <button
        className="button--main-action payment-modal__button"
        onClick={props.handleCloseModal}
      >
        Completed
      </button>
    </div>
  </Modal>
);

PaymentReturnModal.propTypes = {
  amountChangeDue: PropTypes.number.isRequired,
  changeDue: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired
};

export default PaymentReturnModal;
