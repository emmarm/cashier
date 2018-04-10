import React from 'react';

const OrderSummary = (props) => (
  <div>
    {props.orderItems.map((item) => (
      <p key={item.type}>
        {item.type}, {item.size} {item.addons.length > 0 ? '+' : ''} {item.addons.map((addon) => `${addon}, `)} * {item.number}
      </p>
    ))}
    {props.orderTotal}
  </div>
);

export default OrderSummary;
