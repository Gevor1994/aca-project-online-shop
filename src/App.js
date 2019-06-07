import './Styles.css';
import React, { Component } from 'react'
import FormLogin from './FormLogin';
import FormRegistr from './FormRegistr';

export class App extends Component {
  
  render() { 
    return (
    <div className="forms-outer"> 
      <FormRegistr />
      <FormLogin />
    </div> 
    )
  }
}

export default App;
