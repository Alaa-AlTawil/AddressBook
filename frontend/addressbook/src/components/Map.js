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
    return(
        <GoogleMap zoom={10} center={{lat:44,lng:49}} mapContainerClassName="map_container">
            <Marker position={{lat:44,lng:49}}/>
        </GoogleMap>

    )
}