import React from 'react';

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

export default OrderSummary;
