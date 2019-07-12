import React, {useState} from 'react';
import './App.css';
import Button from './components/Button/Button';
import InputBox from './components/InputBox/InputBox';




function App() {
  
   
  return (
    <div className="App">
      <InputBox />
      <div className="calc">        
      <Button setValue='<-'  />
      <Button  setValue='CE' />
      <Button  setValue='C' />
      <Button setValue='+' />
      <Button setValue='sq'  />
      <Button setValue='7'  />
      <Button  setValue='8' />
      <Button  setValue='9' />
      <Button setValue='/' />
      <Button setValue='%'  />     
      <Button setValue='4'  />
      <Button  setValue='5' />
      <Button  setValue='6' />
      <Button setValue='*' />
      <Button setValue='1/x'  />
      <Button setValue='1'  />
      <Button  setValue='2' />
      <Button  setValue='3' />
      <Button setValue='+' />
      <Button setValue='='  />


      </div>
      
      
    </div>
  );
}

export default App;
