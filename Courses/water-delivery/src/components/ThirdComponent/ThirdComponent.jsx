import React from 'react';
import './thirdComponent.css';

function ThirdComponent(props) {
  return (
    <div className="thirdComponent">

      <label htmlFor="date">Date</label>
      <input type="date" name="date" className="deliveryDate" />
      Time
      <select 
        name="deliveryTime"
        className="deliveryTime"
        size="1000"
        value={props.time}
        onChange={props.onTimeChanged}
      >
        <option value="10">10:00-13:00</option>
        <option value="13">13:00-16:00</option>
        <option value="16">16:00-19:00</option>
      </select>
    </div>
  );
}
export default ThirdComponent;