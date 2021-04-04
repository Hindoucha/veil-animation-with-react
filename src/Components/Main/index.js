import React from "react"
import "./main.css"

// import component
import Work from "../Work"
import Pricing from "../Pricing"

const Main = () => {
    return(
        <div className="main">
            <div className="triangle">
            How does it work?
            </div>
            <Work />  
            <Pricing />         
        </div>
    )
}

export default Main