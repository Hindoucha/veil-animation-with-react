import React from "react"
import "./header.css"

// import components
import Navbar from "../Navbar"
import Content from "../Content"

const Header = () => {
    return(
        <div className="header">
            <div className="container">
                <Navbar />
                <Content />
            </div>
        </div>
    )
}

export default Header