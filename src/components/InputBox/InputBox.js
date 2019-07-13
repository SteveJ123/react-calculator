import React from 'react';
import './InputBox.css';


function InputBox(props){
    return (
        <input className="input-width" type="text" value={props.value} />
    )
}

export default InputBox;

