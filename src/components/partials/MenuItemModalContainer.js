import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import MenuItemModal from './presentational/MenuItemModal';

class MenuItemModalContainer extends Component {
  state = {
    number: 1,
    size: undefined,
    addons: [],
    itemTotal: 0,
    error: ''
  }

  handleSizeSelect = (selectedItem, size) => {
    let price;
    if (this.state.size === size) {
      return;
    } else if (!this.state.size) {
      price = selectedItem.sizes[size];
    } else if (this.state.size !== size) {
      price = selectedItem.sizes[size] - selectedItem.sizes[this.state.size];
    }

    this.setState((prevState) => ({
      size,
      itemTotal: prevState.itemTotal + price,
      error: ''
    }));
  }
  handleAddonSelect = (selectedItem, addon) => {
    const price = selectedItem.addons[addon];

    if (this.state.addons.indexOf(addon) === -1) {
      this.setState((prevState) => ({
        addons: [...prevState.addons, addon],
        itemTotal: prevState.itemTotal + price
      }));
    }
  }
  handleIncreaseNumber = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1
    }));
  }
  handleNumberInputChange = (e) => {
    const number = Number(e.target.value);

    if (number) {
      this.setState(() => ({ number }));
    }
  }
  handleDecreaseNumber = () => {
    this.setState((prevState) => ({
      number: prevState.number - 1 > 0 ?
        prevState.number - 1 :
        1
    }));
  }
  handleAddItem = () => {
    const { type } = this.props.selectedItem;
    const { number, size, addons } = this.state;
    const itemsTotal = this.state.itemTotal * this.state.number;

    const orderItem = {
      type,
      number,
      size,
      addons,
      itemsTotal,
      id: uuid()
    };

    if (!size) {
      return this.setState(() => ({
        error: 'Please select a size'
      }));
    }

    this.props.updateOrderItems(orderItem);
    this.props.updateOrderTotal(itemsTotal);
    this.props.handleCloseModal();
    return orderItem;
  }
  render() {
    return (
      <MenuItemModal
        selectedItem={this.props.selectedItem}
        sizes={this.props.sizes}
        addons={this.props.addons}
        number={this.state.number}
        error={this.state.error}
        handleIncreaseNumber={this.handleIncreaseNumber}
        handleNumberInputChange={this.handleNumberInputChange}
        handleDecreaseNumber={this.handleDecreaseNumber}
        handleSizeSelect={this.handleSizeSelect}
        handleAddonSelect={this.handleAddonSelect}
        handleCloseModal={this.props.handleCloseModal}
        handleAddItem={this.handleAddItem}
      />
    );
  }
}

MenuItemModalContainer.defaultProps = {
  selectedItem: null,
  sizes: [],
  addons: []
};

MenuItemModalContainer.propTypes = {
  selectedItem: PropTypes.shape({
    type: PropTypes.string.isRequired,
    sizes: PropTypes.objectOf(PropTypes.number),
    addons: PropTypes.objectOf(PropTypes.number)
  }),
  updateOrderItems: PropTypes.func.isRequired,
  updateOrderTotal: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string),
  addons: PropTypes.arrayOf(PropTypes.string)
};

export default MenuItemModalContainer;
