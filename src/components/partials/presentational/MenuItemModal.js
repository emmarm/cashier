import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import MenuItemOptionContainer from '../MenuItemOptionContainer';

const modalClass = {
  base: 'modal',
  afterOpen: 'modal--after-open',
  beforeClose: 'modal--before-close'
};

const MenuItemModal = (props) => (
  <Modal
    isOpen={!!props.selectedItem}
    className={modalClass}
    onRequestClose={props.handleCloseModal}
    contentLabel="Order Details"
    closeTimeoutMS={150}
  >
    <div className="modal__container">
      <h2 className="modal__title">{props.selectedItem && props.selectedItem.type}</h2>
      <div className="modal__group--number">
        <h3 className="modal__subtitle">Number</h3>
        <div className="modal__options">
          <button className="button--dark modal__option" onClick={props.handleDecreaseNumber}>
            -
          </button>
          <p className="number">{props.number}</p>
          <button className="button--dark modal__option" onClick={props.handleIncreaseNumber}>
            +
          </button>
        </div>
      </div>
      <div className="modal__group--size">
        {props.sizes.length > 0 && <h3 className="modal__subtitle">Size</h3>}
        <div className="modal__options">
          {props.sizes.length > 0 &&
            props.sizes.map((size) => (
              <MenuItemOptionContainer
                key={size}
                size={size}
                handleOptionSelect={props.handleSizeSelect}
                selectedItem={props.selectedItem}
              />
            ))
          }
        </div>
        {props.error && <p className="modal__error">{props.error}</p>}
      </div>
      <div className="modal__group--addons">
        {props.addons.length > 0 && <h3 className="modal__subtitle">Addons</h3>}
        <div className="modal__options">
          {props.addons.length > 0 &&
            props.addons.map((addon) => (
              <MenuItemOptionContainer
                key={addon}
                addon={addon}
                handleOptionSelect={props.handleAddonSelect}
                selectedItem={props.selectedItem}
              />
            ))
          }
        </div>
      </div>
      <button className="button--main-action modal__submit" onClick={props.handleAddItem}>
        Add item
      </button>
    </div>
  </Modal>
);

MenuItemModal.defaultProps = {
  sizes: [],
  addons: []
};

MenuItemModal.propTypes = {
  selectedItem: PropTypes.shape({
    type: PropTypes.string.isRequired,
    sizes: PropTypes.objectOf(PropTypes.number),
    addons: PropTypes.objectOf(PropTypes.number)
  }).isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleDecreaseNumber: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  handleIncreaseNumber: PropTypes.func.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string),
  handleSizeSelect: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  addons: PropTypes.arrayOf(PropTypes.string),
  handleAddonSelect: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired
};

export default MenuItemModal;
