import React from 'react';

function Contact(props) {
    return (
        <div className='survey' id={props.id} onClick={props.click}>
            <div>{props.name}</div>
            <div>{props.number}</div>
            <div>{props.email}</div>
            <div>{props.status}</div>
        </div>
        
    );
}

export default Contact;