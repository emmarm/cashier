import React from 'react';

const MenuItem = (props) => (
  <div>
    <button onClick={() => props.handleItemSelect(props.item)}>
      {props.item.type}
    </button>
  </div>
);

export default MenuItem;
