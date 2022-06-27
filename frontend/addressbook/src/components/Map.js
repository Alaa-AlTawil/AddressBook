import React from 'react'
import { useEffect } from 'react';
function GoogleMap(){
    useEffect(()=>{
        const iframedata=document.getElementById("iframeId")
        const lat=localStorage.getItem("finallat")
        const lng=localStorage.getItem("finallng")
        iframedata.src=`https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`
    })
return(
    <div>
        <iframe id="iframeId" height="500px" width="100%"></iframe>
    </div>


)
}
export default GoogleMap;



// import {GoogleMap, useLoadScript, Marker, LoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";
// export default function Home(){
//     const { isLoaded}=useLoadScript({
//         googleMapsApiKey:"AIzaSyDBPCJVnHrBp0cNoE-0ibZvmH7--HhsLuk",
//     });
//     if(!isLoaded) return<div>Loading ....</div>
//     return <Map/>;
// }
// function Map(){
//     const center=useMemo(()=>({lat:33.8547,lng:35.8623}))
//     return(
        
//         <GoogleMap zoom={10} center={center} mapContainerClassName="map_container">
//             <Marker position={center}/>
//         </GoogleMap>

//     )
// }
