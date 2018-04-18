import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItemOption from './presentational/MenuItemOption';

class MenuItemOptionContainer extends Component {
  handleOptionSelect = (e) => {
    e.preventDefault();

    const { selectedItem } = this.props;
    const option = this.props.size || this.props.addon;
    const { target } = e;
    const sizes = this.props.size && Array.from(target.parentNode.parentNode.childNodes);

    if (sizes) {
      const sizeButtons = sizes.map((size) => size.childNodes[0]);
      sizeButtons.forEach((button) => button.classList.remove('isSelected'));
    }

    target.classList.add('isSelected');
    this.props.handleOptionSelect(selectedItem, option);
  }
  render() {
    return (
      <MenuItemOption
        handleOptionSelect={this.handleOptionSelect}
        selectedItem={this.props.selectedItem}
        size={this.props.size}
        addon={this.props.addon}
      />
    );
  }
}

MenuItemOptionContainer.defaultProps = {
  size: undefined,
  addon: undefined
};

MenuItemOptionContainer.propTypes = {
  selectedItem: PropTypes.shape({
    type: PropTypes.string.isRequired,
    sizes: PropTypes.objectOf(PropTypes.number),
    addons: PropTypes.objectOf(PropTypes.number)
  }).isRequired,
  size: PropTypes.string,
  addon: PropTypes.string,
  handleOptionSelect: PropTypes.func.isRequired
};

export default MenuItemOptionContainer;
