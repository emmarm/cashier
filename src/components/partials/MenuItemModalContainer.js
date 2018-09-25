import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import MenuItemModal from './presentational/MenuItemModal';

class MenuItemModalContainer extends Component {
  state = {
    addons: [],
    error: '',
    itemTotal: 0,
    number: 1,
    size: undefined
  };

  handleSizeSelect = (selectedItem, size) => {
    let price;
    if (this.state.size === size) {
      return;
    } else if (!this.state.size) {
      price = selectedItem.sizes[size];
    } else if (this.state.size !== size) {
      price = selectedItem.sizes[size] - selectedItem.sizes[this.state.size];
    }

    this.setState(prevState => ({
      error: '',
      itemTotal: prevState.itemTotal + price,
      size
    }));
  };
  handleAddonSelect = (selectedItem, addon) => {
    const price = selectedItem.addons[addon];

    if (this.state.addons.indexOf(addon) === -1) {
      this.setState(prevState => ({
        addons: [...prevState.addons, addon],
        itemTotal: prevState.itemTotal + price
      }));
    }
  };
  handleIncreaseNumber = () => {
    this.setState(prevState => ({
      number: prevState.number + 1
    }));
  };
  handleNumberInputChange = e => {
    const number = Number(e.target.value);

    if (number) {
      this.setState(() => ({ number }));
    }
  };
  handleDecreaseNumber = () => {
    this.setState(prevState => ({
      number: prevState.number - 1 > 0 ? prevState.number - 1 : 1
    }));
  };
  handleAddItem = () => {
    const { type } = this.props.selectedItem;
    const { number, size, addons } = this.state;
    const itemsTotal = this.state.itemTotal * this.state.number;

    const orderItem = {
      addons,
      id: uuid(),
      itemsTotal,
      number,
      size,
      type
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
  };
  render() {
    return (
      <MenuItemModal
        addons={this.props.addons}
        error={this.state.error}
        handleAddItem={this.handleAddItem}
        handleAddonSelect={this.handleAddonSelect}
        handleCloseModal={this.props.handleCloseModal}
        handleDecreaseNumber={this.handleDecreaseNumber}
        handleIncreaseNumber={this.handleIncreaseNumber}
        handleNumberInputChange={this.handleNumberInputChange}
        handleSizeSelect={this.handleSizeSelect}
        number={this.state.number}
        selectedItem={this.props.selectedItem}
        sizes={this.props.sizes}
      />
    );
  }
}

MenuItemModalContainer.defaultProps = {
  addons: [],
  selectedItem: null,
  sizes: []
};

MenuItemModalContainer.propTypes = {
  addons: PropTypes.arrayOf(PropTypes.string),
  handleCloseModal: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape({
    type: PropTypes.string.isRequired,
    sizes: PropTypes.objectOf(PropTypes.number),
    addons: PropTypes.objectOf(PropTypes.number)
  }),
  sizes: PropTypes.arrayOf(PropTypes.string),
  updateOrderItems: PropTypes.func.isRequired,
  updateOrderTotal: PropTypes.func.isRequired
};

export default MenuItemModalContainer;
