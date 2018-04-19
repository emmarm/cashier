import React from 'react';
import PropTypes from 'prop-types';

import menu from '../../../constants/menu';
import MenuItem from '../presentational/MenuItem';
import MenuItemModalContainer from '../MenuItemModalContainer';

const menuHeaders = Object.keys(menu);

const MenuForm = (props) => (
  <div className="menu-form">
    <div className="group__container">
      {menuHeaders.map((header) => (
        <div
          key={`cont:${header}`}
          className="group"
        >
          <h2
            key={header}
            className="group__title"
          >
            {header}
          </h2>
          <div
            key={`items:${header}`}
            className="group__items--menu"
          >
            {menu[header].map((item) => (
              <MenuItem
                key={item.type}
                item={item}
                handleItemSelect={props.handleItemSelect}
              />
            ))}
          </div>
        </div>))}
    </div>
    <div>
      {!!props.selectedItem && (
        <MenuItemModalContainer
          selectedItem={props.selectedItem}
          sizes={props.sizes}
          addons={props.addons}
          handleCloseModal={props.handleCloseModal}
          updateOrderItems={props.updateOrderItems}
          updateOrderTotal={props.updateOrderTotal}
        />
      )}
    </div>
  </div>
);

MenuForm.defaultProps = {
  selectedItem: null,
  sizes: [],
  addons: []
};

MenuForm.propTypes = {
  selectedItem: PropTypes.shape({
    type: PropTypes.string.isRequired,
    sizes: PropTypes.objectOf(PropTypes.number),
    addons: PropTypes.objectOf(PropTypes.number)
  }),
  sizes: PropTypes.arrayOf(PropTypes.string),
  addons: PropTypes.arrayOf(PropTypes.string),
  handleCloseModal: PropTypes.func.isRequired,
  updateOrderItems: PropTypes.func.isRequired,
  updateOrderTotal: PropTypes.func.isRequired
};

export default MenuForm;
