import React from 'react'
import { useState, useEffect } from 'react'
import isEmail from 'validator/lib/isEmail'
import history from '../History'
import {BrowserRouter as Router } from 'react-router-dom'
import './Signin.css'

function Signup(props) {

    const [name, setName] = useState("");
    const [nameEmpty, setNameEmpty] = useState(false);
    const [email, setEmail] = useState("");
    const [emailEmpty, setEmailEmpty] = useState(false);
    const [mobile, setMobile] = useState("");
    const [mobileEmpty, setMobileEmpty] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordEmpty, setPassswordEmpty] = useState(false)

    useEffect(() =>{
        setEmailEmpty(false);
        if(!isEmail(email) && email){
            setEmailEmpty(true);
        }
    }, [email]);


    const updateName = e =>{
        setName(e.target.value)
        setNameEmpty(false);
    }

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
    const updateMobile = e =>{
        setMobile(e.target.value)
        if(mobile.length===9){
            setMobileEmpty(false)
        }
        else{
        setMobileEmpty(true)}
    }
    


    const handleSubmit =(e) =>{
        e.preventDefault()
        if(!name){
            setNameEmpty(true)
           
        }
        if(!email){
            setEmailEmpty(true)
           
        }
        if(!mobile){
            setMobileEmpty(true)
           
        }
        if(!password){
            setPassswordEmpty(true)
        }
        if(name && email && mobile && password && !nameEmpty && !emailEmpty && !passwordEmpty && !mobileEmpty){
            alert("Registered Successfully")
        }
        
    }

    return (
        <Router history={history}>
        <div className="body">
        <div className="form-box">
        <div className="heading"><b><h2>Botspot AI</h2></b></div>
        <div className= "sub-heading">Sign up</div>
        <form className="form" onSubmit = {handleSubmit}>
            <div ><input
                className={nameEmpty ? "error-box" : "normal-box"}
                type="text" 
                placeholder="Name"
                value={name}
                onChange ={updateName}/><br/>
                
            </div>

            <div ><input
                className={emailEmpty ? "error-box" : "normal-box"}
                type="email" 
                placeholder="Email"
                value={email}
                onChange ={updateEmail}/><br/>
                
            </div>

            <div ><input
                className={mobileEmpty ? "error-box" : "normal-box"}
                type="text" 
                placeholder="Mobile"
                value={mobile}
                minLength="10"
                onChange ={updateMobile}/><br/>
                
            </div>
            
            <div><input 
                className={passwordEmpty ? "error-box" : "normal-box"}
                type="password" 
                placeholder="Password"
                value = {password}
                minLength= '8'
                onChange = {updatePassword}/><br/>
        
                
    
            </div>

            <button type="submit"  >SignUp</button>

            <div className="signup-line">Already have an account? <b className="signup-btn" onClick={() =>{props.history.push('/')}}>SignIn</b></div>

        </form>
        </div>
        </div>
        </Router>
    )
}

export default Signup
