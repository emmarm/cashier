import React from 'react';
import PropTypes from 'prop-types';

const MenuItemOption = (props) => (
  <div className="item-modal__option">
    <button
      className="button--default"
      onClick={props.handleOptionSelect}
    >
      {props.size && props.size}
      {props.addon && props.addon}
    </button>
  </div>
);

MenuItemOption.defaultProps = {
  size: undefined,
  addon: undefined
};

MenuItemOption.propTypes = {
  handleOptionSelect: PropTypes.func.isRequired,
  size: PropTypes.string,
  addon: PropTypes.string
};

export default MenuItemOption;
