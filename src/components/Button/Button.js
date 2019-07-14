import React from 'react';
import './Button.css';
// import { url } from 'inspector';
import bg from '../../leftarrow.png';



function Button(props){

  let buttonValue = ['<-', 'CE', 'C', '+', 'sq',  7, 8, 9, '/', '%', 4, 5, 6, '*', '1/x', 1, 2, 3, '+', '='];
  
    return(
      
     <>
      { buttonValue.map((element, i) => {
        return (<button key={i} className="btn-height"  onClick={props.onClick} value={element}>{element}</button>)
      })
      //   :
      //  <button className="btn-height" onClick={props.onClick}>{props.setValue}</button>
    }
    </>
      
      
    )
  }


  export default Button;