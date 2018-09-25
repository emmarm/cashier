import React from 'react';
import PropTypes from 'prop-types';

import menu from '../../../constants/menu';
import MenuItem from '../presentational/MenuItem';
import MenuItemModalContainer from '../MenuItemModalContainer';

const menuHeaders = Object.keys(menu);

const MenuForm = props => (
  <div className="menu-form">
    <div className="group__container">
      {menuHeaders.map(header => (
        <div className="group" key={`cont:${header}`}>
          <h2 className="group__title" key={header}>
            {header}
          </h2>
          <div className="group__items--menu" key={`items:${header}`}>
            {menu[header].map(item => (
              <MenuItem
                handleItemSelect={props.handleItemSelect}
                item={item}
                key={item.type}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
    <div>
      {!!props.selectedItem && (
        <MenuItemModalContainer
          addons={props.addons}
          handleCloseModal={props.handleCloseModal}
          selectedItem={props.selectedItem}
          sizes={props.sizes}
          updateOrderItems={props.updateOrderItems}
          updateOrderTotal={props.updateOrderTotal}
        />
      )}
    </div>
  </div>
);

MenuForm.defaultProps = {
  addons: [],
  selectedItem: null,
  sizes: []
};

MenuForm.propTypes = {
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

export default MenuForm;
