import React from 'react';

const MenuItemOption = (props) => (
  <div className="modal__option">
    <button
      className="button--dark"
      onClick={props.handleOptionSelect}
    >
      {props.size && props.size}
      {props.addon && props.addon}
    </button>
  </div>
);

export default MenuItemOption;
