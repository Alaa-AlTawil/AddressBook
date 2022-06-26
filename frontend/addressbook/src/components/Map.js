import {GoogleMap, useLoadScript, Marker, LoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
export default function Home(){
    const { isLoaded}=useLoadScript({
        googleMapsApiKey:"AIzaSyDBPCJVnHrBp0cNoE-0ibZvmH7--HhsLuk",
    });
    if(!isLoaded) return<div>Loading ....</div>
    return <Map/>;
}
function Map(){
    const center=useMemo(()=>({lat:33.8547,lng:35.8623}))
    return(
        
        <GoogleMap zoom={10} center={center} mapContainerClassName="map_container">
            <Marker position={center}/>
        </GoogleMap>

    )
}