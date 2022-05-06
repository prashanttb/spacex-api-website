// Page 2

import React from "react";
import { useLocation,useNavigate} from 'react-router-dom'

const LaunchInfo = () => {

// taking the values from previous route
const {state} = useLocation();
const {props} = state

    let navigate = useNavigate()

  return (
    <div className="container-lg text-center" style={{marginTop:"20px", border:"solid black", padding:"20px"}}>
        <img style={{height:"300px", width:"300px"}}  src={props.image} alt="..."/>
        <h1><strong>Name:</strong> {props.name}</h1>
        <h2><strong>Status:</strong> {props.status}</h2>

        {/* date field is not present in the dataset  */}
        <h2><strong>Date:</strong> {props.date}</h2>
        
        <h2><strong>Reused:</strong> {props.launches!=='No Launch Available' ? "Yes" : "No"}</h2>
        <br />
        <h3><strong>Details:</strong> {props.details}</h3>      

    <button className="btn btn-primary" onClick={()=>{navigate('/')}}>Back</button>
    </div>
  )
  
  
} 
  

export default LaunchInfo