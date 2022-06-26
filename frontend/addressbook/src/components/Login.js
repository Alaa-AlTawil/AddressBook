import React from 'react';
import Header from './Header';
import Button from './Button'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';



function Login() {
    const navigate = useNavigate();
    function registerpage(){
        navigate('/register')
        }
    async function loginfunction(){
        
        let email=document.getElementById("email")
        let password=document.getElementById("password")
        await axios.post(`http://127.0.0.1:4001/login`, {email:email.value, 
        password:password.value})
        .then(res => {
          console.log("halahasihd")
          localStorage.setItem("userid",res.data["_id"]);
          navigate('/contacts')
          
         
        })

    }
    return (  
        <div className="login">
            <Header/>
            <div>
            <h1>Login</h1>
                <div><input id="email" type={'Email'} placeholder='Email'/></div>
                <div><input id="password" type={'Password'} placeholder='password'/></div>
                <div><Button className="btn" text={'login'} onclick={()=>{loginfunction()}} /></div>
                <p onClick={()=>{
                    registerpage()
                }}>register now</p>
                </div>
        </div>
    );
}

export default Login;