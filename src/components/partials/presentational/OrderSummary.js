import React from 'react';
import PropTypes from 'prop-types';

const OrderSummary = props => (
  <div className="group group--order">
    <h2 className="group__title">Order Summary</h2>
    <div className="group__items--order">
      {props.orderItems.map(item => (
        <div className="group__item--order" key={`div:${item.id}`}>
          <div className="order-item__numsize" key={`numsize:${item.id}`}>
            <p className="order-item__number" key={`num:${item.id}`}>
              {item.number}
            </p>
            <p className="order-item__size" key={`size:${item.id}`}>
              {item.size}
            </p>
          </div>
          <p className="order-item__type" key={`type:${item.id}`}>
            {item.type}
          </p>
          {item.addons.length > 0 &&
            item.addons.map(addon => (
              <p className="order-item__addon" key={`${item.id}${addon}`}>
                {addon}
              </p>
            ))}
          <button
            className="order-item__button--delete"
            key={`button:${item.id}`}
            onClick={props.handleDeleteItem}
            value={item.id}
          />
        </div>
      ))}
    </div>
  </div>
);

OrderSummary.propTypes = {
  handleDeleteItem: PropTypes.func.isRequired,
  orderItems: PropTypes.arrayOf(
    PropTypes.shape({
      addons: PropTypes.arrayOf(PropTypes.string),
      id: PropTypes.string.isRequired,
      itemsTotal: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
      size: PropTypes.string,
      type: PropTypes.string.isRequired
    })
  ).isRequired
};

export default OrderSummary;
