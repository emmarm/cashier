import React from 'react';

import menu from '../../../constants/menu';
import MenuItem from '../presentational/MenuItem';
import MenuItemModalContainer from '../MenuItemModalContainer';

const MenuForm = (props) => (
  <div>
    <h2>Boxes</h2>
    {menu.boxes.map((box) => (
      <MenuItem
        key={box.type}
        item={box}
        handleItemSelect={props.handleItemSelect}
      />
    ))}
    <h2>Drinks</h2>
    {menu.drinks.map((drink) => (
      <MenuItem
        key={drink.type}
        item={drink}
        handleItemSelect={props.handleItemSelect}
      />
    ))}
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
);

export default MenuForm;
