import React from 'react';
import Button from './Button';
import Header from './Header';
import axios from 'axios';
import Addlocation from './Addlocation'

function addContact() {
    function add(){
        var lng=localStorage.getItem("lng")
        var lat=localStorage.getItem("lat")
        var fullname=document.getElementById("fullname")
        var email=document.getElementById("email")
        var number=document.getElementById("number")
        var status=document.getElementById("status")
        axios.post(`http://127.0.0.1:4001/addcontact`, {
            userid:localStorage.getItem("userid"),
            name:fullname.value,
            email:email.value,
            number:number.value,
            status:status.value,
            location:{lng:lng,
                      lat:lat
        }})
        .then(res => {
            console.log("done") 
        })
        window.location.reload();
    }
    return ( 
        <div>
            <Header/> 
        <div>
            <input id="email" type={'Email'} placeholder='Email'/>
            <input id="fullname" type={'text'} placeholder='fullname'/>
            <input id="number" type={'text'} placeholder='number'/>
            <input id="status" type={'text'} placeholder='status'/>
            <Addlocation/>
            <Button className="btn" text="add" onclick={()=>{
                add()
            }}/>
            
        </div>
        </div>
    );
}

export default addContact;