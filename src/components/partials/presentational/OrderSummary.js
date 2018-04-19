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
          <div
            className="order-item__numsize"
            key={`numsize:${item.id}`}
          >
            <p key={`num:${item.id}`} className="order-item__number">
              {item.number}
            </p>
            <p key={`size:${item.id}`} className="order-item__size">
              {item.size}
            </p>
          </div>
          <p key={`type:${item.id}`} className="order-item__type">
            {item.type}
          </p>
          {item.addons.length > 0 &&
            item.addons.map((addon) => (
              <p key={`${item.id}${addon}`} className="order-item__addon">
                {addon}
              </p>
            ))}
          <button
            className="order-item__button--delete"
            onClick={props.handleDeleteItem}
            key={`button:${item.id}`}
            value={item.id}
          />
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
