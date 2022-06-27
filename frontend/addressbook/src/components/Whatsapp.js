import React from 'react'
import { useEffect } from 'react';
function WhatsApp(){
   
    useEffect(()=>{
        var url = `https://api.whatsapp.com/send/?phone=${localStorage.getItem("phone")}&text&app_absent=0&output=embed` + "&output=embed";
        window.location.replace(url);
        
    },[])
return(
    <div>
        
    </div>


)
}
export default WhatsApp;