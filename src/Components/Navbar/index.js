import React from "react"
import "./navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <div style={{display: "flex"}}>
                <img src="./pyramid-chart.png"/>
                <div className="logo">Veil</div>
            </div>
            <div className="nav-items">
                <div>About Us</div>
                <div>Process</div>
                <div>Pricing</div>
                <div>Contact</div>
            </div>
            <div className="nav-right">
                <div className="translation">
                    <div style={{fontWeight : "500"}}>En</div>
                    <img src="./down-arrow.png" alt="error" style={{height: "12px"}}/>
                </div>
                <div className="button" style={{backgroundColor: "white"}}>click here</div>
            </div>
        </div>
    )
}

export default Navbar