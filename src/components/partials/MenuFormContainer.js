import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuForm from './presentational/MenuForm';

class MenuFormContainer extends Component {
  state = {
    selectedItem: null
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
        selectedItem={this.state.selectedItem}
        sizes={this.state.selectedItem ? Object.keys(this.state.selectedItem.sizes) : undefined}
        addons={this.state.selectedItem ? Object.keys(this.state.selectedItem.addons) : undefined}
        handleItemSelect={this.handleItemSelect}
        handleCloseModal={this.handleCloseModal}
        updateOrderItems={this.props.updateOrderItems}
        updateOrderTotal={this.props.updateOrderTotal}
      />
    );
  }
}

MenuFormContainer.propTypes = {
  updateOrderItems: PropTypes.func.isRequired,
  updateOrderTotal: PropTypes.func.isRequired
};

export default MenuFormContainer;
