import React from 'react';

const OrderSummary = (props) => (
  <div>
    <h2>Order Summary</h2>
    {props.orderItems.map((item) => (
      <div key={`div:${item.id}`}>
        <p key={`p:${item.id}`}>
          {item.type}, {item.size} {item.addons.length > 0 ? '+' : ''}{' '}
          {item.addons.map((addon) => `${addon}, `)} * {item.number}
        </p>
        <button
          onClick={props.handleDeleteItem}
          key={`button:${item.id}`}
          value={item.id}
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);

export default OrderSummary;
