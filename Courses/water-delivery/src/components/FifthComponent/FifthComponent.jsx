import React from 'react';
import './fifthComponent.css';

function FifthComponent(props) {
  return (
    <div className="fifthComponent">
      <p>Summary:</p>
      <p>bottlesCount: {props.bottlesCount}</p>
      <p>email: {props.email}</p>
      <p>firstName: {props.firstName}</p>
      <p>lastName: {props.lastName}</p>
      <p>tel: {props.tel}</p>
      <p>contractNumber:{props.contractNumber}</p>
      <p>time: {props.time}</p>
      <p>payment: {props.payment}</p>
      <p>date: {props.date}</p>
    </div>
  );
}
export default FifthComponent;