import React from 'react';

const MenuItemOption = (props) => (
  <button onClick={props.handleOptionSelect}>
    {props.size && props.size}
    {props.addon && props.addon}
  </button>
);

export default MenuItemOption;
