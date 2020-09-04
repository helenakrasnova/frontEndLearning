import React from 'react';
import './forthComponent.css';

function ForthComponent(props) {
  return (
    <div className="forthComponent">
      Payment Type
    <input
        name="payment"
        type="radio"
        value="cash"
        onChange={props.onPaymentChanged}
        checked={props.payment ==="cash"} />
      Cash courier
    <input
        name="payment"
        type="radio"
        value="card"
        onChange={props.onPaymentChanged}
        checked={props.payment ==="card"}  />
      Card courier
      </div>
  );
}
export default ForthComponent;