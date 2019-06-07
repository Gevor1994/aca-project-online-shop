import './Styles.css';
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import firebase from 'firebase'

export class FormLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputEmail: '',
      inputPass: '', 
      valid: false,
      rememberMy: false,
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

  handeleRememberMy = () => {
    let isClickRemember = false;
    this.setState ({
      rememberMy : !isClickRemember,
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
      
      const WRONG_EMAIL= 'This emial is not registered, sign it up.';
      const BAD_FORMAT = 'Email adress is badly formatted.';
      const WRONG_PASSWORD= 'Password is incorrect, try again or reset it.';
      
      

      return new Promise((resolve,reject) => {
        firebase.auth().signInWithEmailAndPassword(this.state.inputEmail, this.state.inputPass)
        .then(_ => {
          if(this.state.rememberMy){
            resolve( console.log("Welcome"));
          }else{
            this.firebase.auth().setPersistence('session').then(_ => resolve(console.log("Something happened with  SESSION")));
          }
        })
        .catch(error => {
          switch(error.code){
            case 'auth/invalid-email':
              reject(BAD_FORMAT);
              break;
            case 'auth/user-not-found':
              reject(WRONG_EMAIL);
              break;
            case 'auth/wrong-password':
              reject(WRONG_PASSWORD)
          }
        })
      })
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

  handeleRememberMy = () => {
    let isClickRemember = false;
    this.setState ({
      rememberMy : !isClickRemember,
    })
  }

  render() {
    const isAllDone = (this.state.inputEmail.length > 0 && this.state.inputPass.length > 6 );
    const {inputEmail, inputPass, valid, rememberMy} = this.state;
    
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
                onClick= {this.handeleRememberMy}
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
