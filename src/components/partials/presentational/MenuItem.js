import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = props => (
  <div className="group__item">
    <button
      className="button--default menu-item"
      onClick={() => props.handleItemSelect(props.item)}
    >
      {props.item.type}
    </button>
  </div>
);

MenuItem.propTypes = {
  handleItemSelect: PropTypes.func.isRequired,
  item: PropTypes.shape({
    addons: PropTypes.objectOf(PropTypes.number),
    sizes: PropTypes.objectOf(PropTypes.number),
    type: PropTypes.string.isRequired
  }).isRequired
};

export default MenuItem;
