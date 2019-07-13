import React from 'react';
import './Button.css';
// import { url } from 'inspector';
import bg from '../../leftarrow.png';



function Button(props){
  // console.log(props.setValue);
    return(
      // <div className="btn-background">
      //   <img src="../../leftarrow.png" />
      //   </div>
      
     <>
      { props.setValue === '' ? 
       <button className="btn-height" className="btn-background"  onClick={props.onClick} value={props.setValue} ></button> :
       <button className="btn-height" onClick={props.onClick}>{props.setValue}</button>
    }
    </>
      
      
    )
  }


  export default Button;