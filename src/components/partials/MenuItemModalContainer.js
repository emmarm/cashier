import React, { Component } from 'react';

import MenuItemModal from './presentational/MenuItemModal';

class MenuItemModalContainer extends Component {
  state = {
    number: 1,
    size: undefined,
    addons: [],
    itemTotal: 0
  }

  handleSizeSelect = (selectedItem, size) => {
    const price = selectedItem.sizes[size];
    this.setState((prevState) => ({
      size,
      itemTotal: prevState.itemTotal + price
    }));
  }
  handleAddonSelect = (selectedItem, addon) => {
    const price = selectedItem.addons[addon];
    this.setState((prevState) => ({
      addons: [...prevState.addons, addon],
      itemTotal: prevState.itemTotal + price
    }));
  }
  handleIncreaseNumber = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1
    }));
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
    const orderItem = {
      type,
      number,
      size,
      addons
    };
    const itemsTotal = this.state.itemTotal * this.state.number;

    this.props.updateOrderItems(orderItem);
    this.props.updateOrderTotal(itemsTotal);
    this.props.handleCloseModal();
  }
  render() {
    return (
      <MenuItemModal
        selectedItem={this.props.selectedItem}
        sizes={this.props.sizes}
        addons={this.props.addons}
        number={this.state.number}
        handleIncreaseNumber={this.handleIncreaseNumber}
        handleDecreaseNumber={this.handleDecreaseNumber}
        handleSizeSelect={this.handleSizeSelect}
        handleAddonSelect={this.handleAddonSelect}
        handleCloseModal={this.props.handleCloseModal}
        handleAddItem={this.handleAddItem}
      />
    );
  }
}

export default MenuItemModalContainer;
