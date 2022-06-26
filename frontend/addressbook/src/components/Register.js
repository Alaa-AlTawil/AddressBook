import React from 'react';
import Header from './Header';
import Button from './Button';
import axios from 'axios';

function Register() {
    async function register(){
        var fname=document.getElementById("first_name")
        var lname=document.getElementById("last_name")
        var email=document.getElementById("email")
        var password=document.getElementById("password")

        await axios.post(`http://127.0.0.1:4001/register`, {first_name:fname.value,last_name:lname.value,email:email.value, 
        password:password.value})
        .then(res=>{
            console.log("done")
        })
    }
    return ( 
        <div className="login">
            <Header/>
            <div>
                <div><input id="first_name" type={'text'} placeholder='First Name'/></div>
                <div><input id="last_name" type={'text'} placeholder='Last Name'/></div>
                <div><input id="email" type={'Email'} placeholder='Email'/></div>
                <div><input id="password" type={'Password'} placeholder='password'/></div>
                <div><Button className="btn" text={'sign up'} onclick={()=>{register()}} /></div>
            </div>
        </div>
     );
}

export default Register;