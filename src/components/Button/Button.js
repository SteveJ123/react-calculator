import React from 'react';
import './Button.css'



function Button(props){
    return(
      <button className="btn-height" onClick={props.onClick}>{props.setValue}</button>
    )
  }


  export default Button;