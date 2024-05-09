import React from 'react'
import { useState } from 'react';

function UserInput(props) {
  const [text, setText] = useState('0'); 
  const handleOnChange = (e) => {
    props.onChange(props.team, props.type, e.target.value);
    setText(e.target.value);
  };
  return (
    <>
    <div className="input-group my-2">
      <span className="input-group-text">{`Enter ${props.team} ${props.type}`}</span>
        <input type={props.type === "overs" ? "text" : "number"}  value={text} onChange={handleOnChange} aria-label="First name" className="form-control"/>
    </div>
    </>
    );
}

export default UserInput;
