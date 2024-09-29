import React, {} from 'react'
import { useState } from 'react'
import formikForm from './formikForm';

function validateMessage (props) {
    if(props.valid){
        return <div>{props.message}</div>
    }
    return null;
}

function RegistrationForm() {
     const [state, setState] =useState()
    state = {
        username: '', 
        usernameValid: false,
        email: '', 
        emailValid: false,
        password: '', 
        passwordValid: false,
        formValid: false, 
        errMsg: {}
    };

    validateForm = () => {
        const{
            usernameValid,
            emailValid,
            passwordValid
        } = state;
        setState({
            formValid: usernameValid && passwordValid && emailValid
        });
    };
    validateUsername = () => {
        const {username} = state
        let usernameValid = true
        let errMsg = {...state.errMsg}
        if(username.length <6 || username.length > 16){
            usernameValid = false
            errMsg.username ="Username character should be bitween 6 and 16"
        }
        setState({usernameValid, errMsg}, validateForm);
    };

    validateEmail = () => {
        const {email} = state
        let emailValid = true
        let errMsg = {...state.errMsg}
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            usernameValid = false
            errMsg.username ="Invalid email format"
        }
setState({emailValid, errMsg},validateForm);
    };
    
    validatePassword = () => {
        const {password} = state
        let passwordValid = true
        let errMsg = {...state.errMsg}
        if(username.length <6 ){
            usernameValid = false
            errMsg.username ="lessthan required password character"
        }
    setState({passwordValid, errMsg},validateForm);
    };
  
    return (
        
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id='username'
                name="username"
                value={state.username}
                onChange={(e) => setState({username:e.target.value}, validateUsername)}
            />
            <span>
                Validation Message 
                valid= {state.usernameValid}
                message={state.errMsg.username}
            </span>
            <input
                type="email"
                id='email'
                name="email"
                value={state.email}
                onChange={(e) => setState({email:e.target.value}, validateEmail)}
            />
            <span>
                Validation Message 
                valid= {state.emailValid}
                message={state.errMsg.email}
            </span>
            <input
                type="password"
                id='password'
                name="password"
                value={state.password}
                onChange={(e) => setState({password:e.target.value}, validatePassword)}

            />
            <span>
                Validation Message 
                valid= {state.passwordValid}
                message={state.errMsg.password}
            </span>
            <button type="submit" disabled = {!state.formValid}>Submit</button>
        </form>
    )
}

export default RegistrationForm