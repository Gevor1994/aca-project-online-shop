import './Styles.css';
import React, { Component } from 'react'
import FormLogin from './FormLogin';
import FormRegistr from './FormRegistr';

export class App extends Component {
  
  render() { 
    return (
    <div>
      <FormRegistr />
      <FormLogin />
    </div> 
    )
  }
}

export default App;
