import React from 'react';
import Header from './Header.js';
import Contact from './Contact';
import {  useState, useEffect } from "react";
import axios from 'axios';

function Search(){
    const [arr, setarr] = useState([]);
    function GetItemBySearch(){
             
        
                var search=document.getElementById("searchId")
                axios.post(`http://127.0.0.1:4001/search`,{name:search.value , userid:localStorage.getItem("userid")})
                .then(res => {
                setarr(res.data)        
                             })
                        
    }
    return(
        <div>
            <Header/>
            <div>
                <input type="text" id="searchId" placeholder='search' onChange={()=>{
                     GetItemBySearch()
                }}/>
            </div>
            <div className="view">
          {
                arr.map((value,index)=>{
                    return (
                        <Contact key={index} name={value["name"]} number={value["number"]} status={value["status"]} email={value["email"]} id={value["_id"]} />
                    )
                })
            }
          </div>
        </div>
    )

}
export default Search

