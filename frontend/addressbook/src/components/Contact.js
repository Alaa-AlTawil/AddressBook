import React from 'react';
import axios from 'axios';
import email from '../assets/email.png'
import networking from '../assets/networking.png'
import placeholder from '../assets/placeholder.png'
import user from '../assets/user.png'
import telephone from '../assets/telephone.png'
import cutlery from '../assets/pieces-of-cutlery.png'

import {useNavigate} from 'react-router-dom';
function Contact(props) {
    const navigate = useNavigate();
    function Delete(n){
        axios.post(`http://127.0.0.1:4001/deletecontact`, {_id:n})
        .then(res => {
        console.log("deleted")  
        window.location.reload();
          
        })
    }
    return (
        <div className='survey' id={props.id} onClick={props.click}>
            <div className="size"><img src={user}></img> :{props.name}</div>
            <div className="size" onClick={async()=>{
                await localStorage.setItem("phone",props.number)
                navigate('/whatsapp')   
                
            }}><img src={telephone}></img> :{props.number}</div>
            <div className="size"><img src={email}></img> :{props.email}</div>
            <div className="size"><img src={networking}></img> :{props.status}</div>
            <div className="size" onClick={async ()=>{
                await axios.post(`http://127.0.0.1:4001/getlocation`, {_id:props.id})
                 .then(res=>{
                    localStorage.setItem("finallng",res.data["lng"])
                    localStorage.setItem("finallat",res.data["lat"])
                    console.log(localStorage.getItem("finallat"))

                 })
                 navigate('/map')
            
            }}><img  src={placeholder}></img></div>
            <div  className="size" onClick={()=>{
                Delete(props.id)
            }}><img src={cutlery}></img></div>
        </div>
        
    );
}

export default Contact;