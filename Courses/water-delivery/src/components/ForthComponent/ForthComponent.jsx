import React from 'react';
import './forthComponent.css';

function ForthComponent(props) {
  return (
    <div className="forthComponent">
      Payment Type
    <input
        name="payment"
        type="radio"
        value={props.payment}
        onChange={props.onPaymentChanged} />
      Cash courier
    <input
        name="payment"
        type="radio"
        value={props.payment}
        onChange={props.onPaymentChanged} />
      Card courier
      </div>
  );
}
export default ForthComponent;