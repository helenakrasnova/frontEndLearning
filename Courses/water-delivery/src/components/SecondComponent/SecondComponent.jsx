import React from 'react';
import './secondComponent.css';

function SecondComponent(props) {
  return (
    <div className="secondComponent">
      Personal Data:
       <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        className="secondComponentInputs"
        value={props.email}
        onChange={props.onEmailChanged} />
      <label htmlFor="firstName">firstName</label>
      <input
        type="text"
        name="firstName"
        className="secondComponentInputs"
        value={props.firstName}
        onChange={props.onFirstNameChanged} />
      <label htmlFor="lastName">lastName</label>
      <input
        type="text"
        name="lastName"
        className="secondComponentInputs"
        value={props.lastName}
        onChange={props.onLastNameChanged} />
      <label htmlFor="tel">tel</label>
      <input
        type="tel"
        name="tel"
        className="secondComponentInputs"
        value={props.tel}
        onChange={props.onTelChanged} />
      <label htmlFor="contractNumber">contractNumber</label>
      <input
        type="number"
        name="contractNumber"
        className="secondComponentInputs"
        value={props.contractNumber}
        onChange={props.onContractNumberChanged} />
    </div>
  );
}
export default SecondComponent;