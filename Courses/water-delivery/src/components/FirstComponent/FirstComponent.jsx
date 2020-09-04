import React from 'react';
import './firstComponent.css';

function FirstComponent(props) {
  return (
    <div className="firstComponent">
      Вода питьевая. Количество :
        <button 
        className="firstComponentButton"
        onClick={props.onFirstValueChangeMinus}>-</button>
      <input
        className="firstComponentInput"
        type="number"
        size="2"
        name="num"
        min="1"
        max="10"
        onChange={props.onNumberChanged}
        value={props.bottlesCount} />
      <button
        className="firstComponentButton"
        onClick={props.onFirstValueChange}>+</button>
    </div>
  );
}
export default FirstComponent;