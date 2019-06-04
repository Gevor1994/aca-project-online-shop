import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class FormRegistr extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputEmail: '',
            inputPass: '',
            inputConf: '',
            valid: true,
            validConf: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleChange (event, type){
        this.setState({
            [type] : event.target.value
        })
    }

    handleButtonClick(){
        let ifValid = false;
        let isValidConf = true;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.inputEmail))
            {
               ifValid = true;
            }
        let pass= this.state.inputPass;
        let conf= this.state.inputConf;
        for(let i= 0 ; i < pass.length; ++i){
            if(pass[i] !== conf[i]){
                isValidConf = false;
            }
        }
        this.setState({
          valid: ifValid,
          validConf: isValidConf
        });
        
    }


    render() {
        const isAllDone = (this.state.inputEmail.length > 0 && this.state.inputPass.length > 0 && this.state.inputConf.length > 0);
        const {inputEmail, inputPass, inputConf, valid, validConf} = this.state;
        return (
            <div>
                <form className="sign-form">
                    <h2>Register</h2>

                    <div className= "div1">
                    <label>Email address * </label> 
                    <TextField
                        error={!valid}
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

                    <div className= "div2">
                    <label>Confirm your Password * </label>
                    <TextField
                        error={!validConf}
                        className = "login-input"
                        label="Confirm"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        onChange={(event) => this.handleChange(event, 'inputConf')}
                        value = {inputConf}
                        />
                    </div>

                    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account</p>

                    <FormControlLabel
                        className="button"
                        control={
                        <Checkbox
                            value="checkedB"
                            color="primary"
                        />
                        }
                        label="I want to receive updates about products and promotions."
                    />
                    <Button 
                        className = "button" 
                        variant="contained" 
                        color="primary"  
                        disabled={!isAllDone} onClick={this.handleButtonClick}>
                        Register
                    </Button>
    
                </form>
            </div>
        )
    }
}

export default FormRegistr
