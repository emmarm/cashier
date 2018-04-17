import React from 'react';

const MenuItem = (props) => (
  <div className="group__item">
    <button
      className="button--dark"
      onClick={() => props.handleItemSelect(props.item)}
    >
      {props.item.type}
    </button>
  </div>
);

export default MenuItem;
