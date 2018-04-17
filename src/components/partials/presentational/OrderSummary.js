import React from 'react';
import PropTypes from 'prop-types';

const OrderSummary = (props) => (
  <div className="group">
    <h2 className="group__title">Order Summary</h2>
    <div className="group__items--order">
      {props.orderItems.map((item) => (
        <div
          className="group__item--order"
          key={`div:${item.id}`}
        >
          <p key={`p:${item.id}`}>
            {item.type}, {item.size} {item.addons.length > 0 ? '+' : ''}{' '}
            {item.addons.map((addon) => `${addon}, `)} * {item.number}
          </p>
          <button
            className="button--light"
            onClick={props.handleDeleteItem}
            key={`button:${item.id}`}
            value={item.id}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  </div>
);

OrderSummary.propTypes = {
  orderItems: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    size: PropTypes.string,
    addons: PropTypes.arrayOf(PropTypes.string),
    itemsTotal: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired,
  handleDeleteItem: PropTypes.func.isRequired
};

export default OrderSummary;
