import React from "react"
import "./main.css"

// import component
import Work from "../Work"

const Main = () => {
    return(
        <div className="main">
            <div className="triangle">
            How does it work?
            </div>
            <Work />           
        </div>
    )
}

export default Main