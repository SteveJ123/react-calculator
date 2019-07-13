import React, {useState} from 'react';
import './App.css';
import Button from './components/Button/Button';
import InputBox from './components/InputBox/InputBox';
import '../node_modules/font-awesome/css/font-awesome.min.css';




function App() {
  
  const [inputValue, setinputValue] = useState(0);
  const [operand1, setoperand1] = useState(0);
  // const [secondvalue, setsecondvalue] = useState('');

  const buttonValue = (event ) =>{    
    let expr = event.target.innerHTML;    
switch (expr) {
  case '+':
    console.log('+');
    let temp = operand1 + Number(inputValue);
    setoperand1(temp);
    console.log("temp", temp);
    setinputValue(temp);
    break;
  case '=':
  console.log('=');  
  setinputValue(Number(operand1)+Number(inputValue));    
    break;
  default:
    setinputValue(event.target.innerHTML);
}
  };

  
   
  return (
    <div className="App">
      <InputBox value={inputValue} />
      <div className="calc">           
      <Button  setValue='<-' onClick={buttonValue}  />
      <Button  setValue='CE' onClick={buttonValue}/>
      <Button  setValue='C' onClick={buttonValue} />
      <Button setValue='+' onClick={buttonValue} />
      <Button setValue='sq' onClick={buttonValue} />
      <Button setValue='7' onClick={buttonValue} />
      <Button  setValue='8' onClick={buttonValue} />
      <Button  setValue='9' onClick={buttonValue} />
      <Button setValue='/' onClick={buttonValue} />
      <Button setValue='%' onClick={buttonValue} />     
      <Button setValue='4' onClick={buttonValue} />
      <Button  setValue='5' onClick={buttonValue} />
      <Button  setValue='6' onClick={buttonValue} />
      <Button setValue='*' onClick={buttonValue} />
      <Button setValue='1/x' onClick={buttonValue} />
      <Button setValue='1' onClick={buttonValue} />
      <Button  setValue='2' onClick={buttonValue}/>
      <Button  setValue='3' onClick={buttonValue}/>
      <Button setValue='+' onClick={buttonValue}/>
      <Button setValue='=' onClick={buttonValue} />


      </div>
      
      
    </div>
  );
}

export default App;
