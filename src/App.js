import React, {useState} from 'react';
import './App.css';
import Button from './components/Button/Button';
import InputBox from './components/InputBox/InputBox';
import '../node_modules/font-awesome/css/font-awesome.min.css';




function App() {
  
  // let  display = '';
  const [inputValue, setinputValue] = useState('');
  const [operand1, setoperand1] = useState(0);
  const [equal, setequal] = useState(false);
  // const [secondvalue, setsecondvalue] = useState('');

  const buttonValue = (event ) =>{    
    //event.target.value did not work
    let expr = event.target.innerHTML;    //value in the button - that particular button 7 
switch (expr) {
  case 'C':
    console.log('c is pressed');
    setinputValue('');
    break;
  case '+':
    console.log('+');    
    let temp = operand1 + Number(inputValue);
    setoperand1(temp);
    console.log("temp", temp);
    setinputValue('');
    break;
  case '=':
  console.log('=');  
  setinputValue(Number(operand1)+Number(inputValue));
  setequal(true);    
    break;
  default:
      setinputValue(inputValue + event.target.innerHTML); // ''+7 = 7
       
}

  };

  
   
  return (
    <div className="App">
      <InputBox value={inputValue} />

      <div className="calc">           
      
      <Button   onClick={buttonValue}/>      

      </div>
      
      
    </div>
  );
}

export default App;
