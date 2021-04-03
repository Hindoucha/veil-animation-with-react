import React from "react"
import "./stepDescription.css"


const StepDescription = (props) => {
    return(
        <div className="step-description">
            <div style={{color: "#92140C", fontWeight:"600"}}>{props.title}</div>
            <div style={{color:"#FFCF99", fontWeight:"600", fontSize:"1.4em"}}>{props.subTitle}</div>
            <div>{props.description}</div>
        </div>
    )
}

export default StepDescription