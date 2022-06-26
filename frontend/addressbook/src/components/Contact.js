import React from 'react';
import Button from './Button'
import axios from 'axios';

function Contact(props) {

    function Delete(n){
        axios.post(`http://127.0.0.1:4001/deletecontact`, {_id:n})
        .then(res => {
        console.log("deleted")  
        window.location.reload();
          
        })
    }
    return (
        <div className='survey' id={props.id} onClick={props.click}>
            <div>{props.name}</div>
            <div>{props.number}</div>
            <div>{props.email}</div>
            <div>{props.status}</div>
            <Button text="location"/>
            <Button text="delete" onclick={()=>{
                Delete(props.id)
            }}/>
        </div>
        
    );
}

export default Contact;