import React, {useState} from 'react';
import './App.css';
import Button from './components/Button/Button';
import InputBox from './components/InputBox/InputBox';
import '../node_modules/font-awesome/css/font-awesome.min.css';




function App() {
  
  const [inputValue, setinputValue] = useState('');
  const [operand1, setoperand1] = useState(0);
  const [secondvalue, setsecondvalue] = useState(0);

  const buttonValue = (event ) =>{    
    let expr = event.target.innerHTML;    
switch (expr) {
  case '+':
    console.log('+');
    setoperand1(inputValue);
    console.log("operand1", operand1);
    setinputValue('');
    break;
  case '=':
  console.log('=');  
  setinputValue(Number(operand1)+Number(inputValue));    
    break;
  default:
    setinputValue(inputValue + event.target.innerHTML);
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
