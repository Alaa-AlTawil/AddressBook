import React from 'react';
import Header from './Header.js';
import Contact from './Contact';
import {  useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Button from './Button';



function Contacts() {

  const navigate = useNavigate();
    function AddContact(){
        navigate('/addContact')
   }
    const [arr, setarr] = useState([]); 
     
    useEffect(()=>{
      axios.post(`http://127.0.0.1:4001/getcontacts`,{userid:localStorage.getItem("userid")})
        .then(res => {
            setarr(res.data)

        })
    },[])   
    return (
      
        <div>
          <Header/>
          <Button text="add contact" onclick={()=>{AddContact()}}/>
          <div className="view">
          {
                arr.map((value,index)=>{
                    return (
                        <Contact key={index} name={value["name"]} number={value["number"]} status={value["status"]} email={value["email"]} id={value["id"]} />
                    )
                })
            }
          </div>
        </div>
      );
}

export default Contacts;
