import './Styles.css';
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormRegistr from './FormRegistr';
import firebase from 'firebase'

export class FormLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputEmail: '',
      inputPass: '', 
      valid: false,
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleButtonClick = this.handleButtonClick.bind(this);
  this.handleButtonExit = this.handleButtonExit.bind(this);
 
  }
  
  handleChange (event, type){
    this.setState({
        [type] : event.target.value
    })
  }

  handleButtonClick(){
    
    let isValid = true;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.inputEmail))
        {
           isValid = false;
        }
    this.setState({
      valid: isValid
    });
    if(!isValid){
      
      firebase.auth().signInWithEmailAndPassword(this.state.inputEmail, this.state.inputPass)
      .then(function(){ console.log("Welcome to our shop")})
      .catch(handleButtonClick => console.log("Your Login or Password is wrong, please Enter again"))
      
      
    }
    
  }

  

  handleButtonExit ()  {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
      }else{
        console.log('not logged in');
      }
    });
    firebase.auth().signOut();
  }

  render() {
    const isAllDone = (this.state.inputEmail.length > 0 && this.state.inputPass.length > 6 );
    const {inputEmail, inputPass, valid} = this.state;
    
    return (
    <div>
      <form className="sign-form">
        <h1>My Account</h1>
        <h2>Login</h2>

        <div className= "div1">
          <label> Email address * </label> 
          <TextField
            error={valid}
            className = "login-input"
            label="Login"
            type="text"
            autoComplete="current-password"
            variant="outlined"
            onChange={(event) => this.handleChange(event, 'inputEmail')}
            value = {inputEmail}
          />
        </div >
              
        <div className= "div2">
          <label>Password * </label>
          <TextField
            className = "login-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={(event) => this.handleChange(event, 'inputPass')}
            value = {inputPass}
            />
        </div>

        <Button 
            className = "button" 
            variant="contained" 
            color="primary"  
            disabled={!isAllDone} onClick={this.handleButtonClick}>
            Login
        </Button>

        <Button 
            className = "button" 
            variant="contained" 
            color="primary"  
           onClick={this.handleButtonExit}>
            Log Out      
            </Button>


        <FormControlLabel
            className="button"
            control={
              <Checkbox
                value="checkedB"
                color="primary"
              />
            }
            label="Remember"
        />
      </form>
      <hr className= "hr"></hr>
      <p>Login or register with your social account.</p>
    </div> 
    )
  }
}

export default FormLogin;
