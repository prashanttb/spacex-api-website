// Card

import React from "react";
import {useNavigate} from 'react-router-dom'
import '../App.css'


const Launch = (props) =>{

    let navigate = useNavigate()
    return(
        <> 
        <div  className="container-lg m-5">
        <div style={{width:"18rem"}} className="card">
        <img  src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title"><strong>Name</strong>: {props.name}</h5>
            <p><strong>Details</strong>: {props.details}</p>
            <p><strong>Status</strong>: {props.status}</p>
            <p><strong>Launches</strong>: {props.launches}</p>
            <button className="btn btn-primary" onClick={()=>{navigate(`/details/${props.id}`,{state:{props:props}})}}>More Info</button>

        </div>
        </div>
     

        </div>

        </>
    )
}

export default Launch