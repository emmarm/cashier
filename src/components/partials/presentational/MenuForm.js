import React from 'react';
import PropTypes from 'prop-types';

import menu from '../../../constants/menu';
import MenuItem from '../presentational/MenuItem';
import MenuItemModalContainer from '../MenuItemModalContainer';

const MenuForm = (props) => (
  <div className="menu-form">
    <div className="group">
      <h2 className="group__title">Boxes</h2>
      <div className="group__items--menu">
        {menu.boxes.map((box) => (
          <MenuItem
            key={box.type}
            item={box}
            handleItemSelect={props.handleItemSelect}
          />
        ))}
      </div>
    </div>
    <div className="group">
      <h2 className="group__title">Drinks</h2>
      <div className="group__items--menu">
        {menu.drinks.map((drink) => (
          <MenuItem
            key={drink.type}
            item={drink}
            handleItemSelect={props.handleItemSelect}
          />
        ))}
      </div>
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
  handleItemSelect: PropTypes.func.isRequired,
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
