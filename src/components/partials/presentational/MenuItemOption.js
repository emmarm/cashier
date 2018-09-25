import React from 'react';
import PropTypes from 'prop-types';

const MenuItemOption = props => (
  <div className="item-modal__option">
    <button className="button--default" onClick={props.handleOptionSelect}>
      {props.size && props.size}
      {props.addon && props.addon}
    </button>
  </div>
);

MenuItemOption.defaultProps = {
  addon: undefined,
  size: undefined
};

MenuItemOption.propTypes = {
  addon: PropTypes.string,
  handleOptionSelect: PropTypes.func.isRequired,
  size: PropTypes.string
};

export default MenuItemOption;
