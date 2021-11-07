import React from 'react'
import './Signin.css'
import { useState, useEffect } from 'react';
import history from '../History';
import isEmail from'validator/lib/isEmail';

function Signin() {

    const [email, setEmail] = useState("");
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordEmpty, setPassswordEmpty] = useState(false)

    useEffect(() =>{
        setEmailEmpty(false);
        if(!isEmail(email) && email){
            setEmailEmpty(true);
        }
    }, [email]);


    const updateEmail = e =>{
        setEmail(e.target.value)
        setEmailEmpty(false);
    }

    const updatePassword = e =>{
        setPassword(e.target.value)
        if(password.length<8){
            setPassswordEmpty(true)
        }
        else{
        setPassswordEmpty(false)}
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        if(!email){
            setEmailEmpty(true)
           
        }
        if(!password){
            setPassswordEmpty(true)
        }
        if(email && password && !emailEmpty && !passwordEmpty){
            alert("Login Successfully")
        }
    }

    return (
        <div className="body">
        <div className="form-box">
        <div className="heading"><b><h2>Botspot AI</h2></b></div>
        <div className= "sub-heading">Login</div>
        <form className="form" onSubmit = {handleSubmit}>
            <div ><input
                className={emailEmpty ? "error-box" : "normal-box"}
                type="email" 
                placeholder="Email"
                value={email}
                onChange ={updateEmail}/><br/>
                
            </div>
            <div><input 
                className={passwordEmpty ? "error-box" : "normal-box"}
                type="password" 
                placeholder="Password"
                value = {password}
                minLength= '8'
                onChange = {updatePassword}/><br/>
                
    
            </div>

            <button type="submit" >Login</button>

            <div className="signup-line">Don't have an account? <b className="signup-btn" onClick={() => {history.push('/signup')}}>SignUp</b></div>

        </form>
        </div>
        </div>
    )
}

export default Signin;
