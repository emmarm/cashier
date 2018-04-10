import React, { Component } from 'react';

import MenuForm from './presentational/MenuForm';

class MenuFormContainer extends Component {
  state = {
    selectedItem: undefined
  }

  handleItemSelect = (item) => {
    this.setState(() => ({
      selectedItem: { ...item }
    }));
  }
  handleCloseModal = () => {
    this.setState(() => ({
      selectedItem: undefined
    }));
  }
  render() {
    return (
      <MenuForm
        handleItemSelect={this.handleItemSelect}
        selectedItem={this.state.selectedItem}
        sizes={this.state.selectedItem ? Object.keys(this.state.selectedItem.sizes) : undefined}
        addons={this.state.selectedItem ? Object.keys(this.state.selectedItem.addons) : undefined}
        handleCloseModal={this.handleCloseModal}
        updateOrderItems={this.props.updateOrderItems}
        updateOrderTotal={this.props.updateOrderTotal}
      />
    );
  }
}

export default MenuFormContainer;
