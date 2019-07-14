import React, {useState, useEffect} from 'react';
import './App.css';
import Button from './components/Button/Button';
import InputBox from './components/InputBox/InputBox';
import '../node_modules/font-awesome/css/font-awesome.min.css';




function App() {
  
  // let  display = '';
  const [display, setdisplay] = useState(0);
  const [inputValue, setinputValue] = useState('');
  const [operand1, setoperand1] = useState(0);
  const [operatorselected, setoperatorselected] = useState('');
  // const [secondvalue, setsecondvalue] = useState('');

  // useEffect(()=> {
  //   <InputBox value={inputValue} />
  // })



  useEffect(() => { console.log(inputValue, operand1)}, [inputValue])
  const  buttonValue =  (event ) =>{    
    //event.target.value did not work
  
    
    let expr = event.target.innerHTML;    //value in the button - that particular button 7 
switch (expr) {
  case 'C':
    console.log('c is pressed');
    setinputValue('');
    setoperand1(0);
    break;
  case '+':
    console.log('+');
    setoperatorselected('+');       
    setdisplay(inputValue);
    let temp = operand1 + Number(inputValue); // 0 + 7
     setoperand1(temp);    
     setinputValue('');
     setdisplay(temp);    
    break;
    case '*':
    console.log('*');
    setoperatorselected('*');              
    if(operand1 && inputValue === ''){

    }else if(operand1){
      setdisplay(inputValue);
    let temp = operand1 * Number(inputValue); // 0 + 7
     setoperand1(temp);    
     setinputValue('');
     setdisplay(temp);    
    }else{
      let temp =  Number(inputValue); // 0 + 7
     setoperand1(temp);    
     setinputValue('');
     setdisplay(temp);    
    }
    
    break;
  case '=':
    if(operatorselected === '+'){
      var equal = Number(operand1) + Number(inputValue);  
      }else if(operatorselected === '*'){
      var equal = Number(operand1) * Number(inputValue);  
    }
    setinputValue(equal); 
  setdisplay(equal);
    setoperand1(0);  
    break;
  default:
    let test = inputValue + event.target.innerHTML;
      setinputValue(test)
      setdisplay(test);
      console.log("display", display);
    
      
       
};
    
  };

  
   
  return (
    <div className="App">
      <InputBox value={display} />

      <div className="calc">           
      
      <Button   onClick={buttonValue}/>      

      </div>
      
      
    </div>
  );
}

export default App;
