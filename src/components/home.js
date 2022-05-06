// Page 1

import React from "react";
import Launch from "./launch";
import '../App.css'

class Home extends React.Component{

    constructor(){
        super();

        this.state = {
            launches : []
        }
    }

    // fetching data from api
    componentDidMount(){
        fetch("https://api.spacexdata.com/v4/launchpads")
        .then((response)=>response.json())
        .then(launches => this.setState({launches: launches}) )
    }

    render(){
        return(


            <div className="container">
                {
                    this.state.launches.map((launch)=>(
                        <Launch image = {launch.images.large} name = {launch.name} id = {launch.id} details = {launch.details} status = {launch.status} launches = {launch.launches.length ? `${launch.launches[0]}, ${launch.launches[1]}, ${launch.launches[2]}` : "No Launch Available"}/>
                    ))
                }
            </div>
    
        )
    }
}


export default Home