import React from "react"
import "./homepage.css"
import { useHistory } from "react-router-dom";

const Homepage = ({setLoginUser}) => {
    const history = useHistory()
    return (
        
        <div className="homepage"> 
        <h1>Main Dashboard</h1>
         <div className="button" onClick={() => history.push("/login")}> Logout</div>
         <div className="feed">Scrapped Data</div>
        </div>

    )
}

export default Homepage;