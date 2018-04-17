import React, { Component } from 'react';

import MenuItemOption from './presentational/MenuItemOption';

class MenuItemOptionContainer extends Component {
  handleOptionSelect = (e) => {
    e.preventDefault();

    const { selectedItem } = this.props;
    const option = this.props.size || this.props.addon;
    const { target } = e;

    // if (this.props.size) {
    //   target.parentNode.children.toArray().forEach((child) => console.log(child));
    // }
    target.classList.add('isSelected');
    this.props.handleOptionSelect(selectedItem, option);
  }
  render() {
    return (
      <MenuItemOption
        className={this.props.className}
        handleOptionSelect={this.handleOptionSelect}
        selectedItem={this.props.selectedItem}
        size={this.props.size}
        addon={this.props.addon}
      />
    );
  }
}

export default MenuItemOptionContainer;
