import React from 'react';
import Modal from 'react-modal';

import MenuItemOptionContainer from '../MenuItemOptionContainer';

const MenuItemModal = (props) => (
  <Modal
    isOpen={!!props.selectedItem}
    onRequestClose={props.handleCloseModal}
    contentLabel="Order Details"
    closeTimeoutMS={200}
  >
    <h2>{props.selectedItem && props.selectedItem.type}</h2>
    <h3>Number</h3>
    <button onClick={props.handleDecreaseNumber}>-</button>
    <p>{props.number}</p>
    <button onClick={props.handleIncreaseNumber}>+</button>
    {props.sizes.length > 0 && <h3>Size</h3>}
    {props.sizes.length > 0 &&
      props.sizes.map((size) => (
        <MenuItemOptionContainer
          key={size}
          size={size}
          handleOptionSelect={props.handleSizeSelect}
          selectedItem={props.selectedItem}
        />
      ))}
    {props.addons.length > 0 && <h3>Addons</h3>}
    {props.addons.length > 0 &&
      props.addons.map((addon) => (
        <MenuItemOptionContainer
          key={addon}
          addon={addon}
          handleOptionSelect={props.handleAddonSelect}
          selectedItem={props.selectedItem}
        />
      ))}
    <button onClick={props.handleAddItem}>Okay</button>
  </Modal>
);

export default MenuItemModal;
