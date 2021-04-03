import React from "react"
import "./stepImage.css"

const StepImageLeft = () => {
    return(
            <div className="step-image">
                <div style={{position:"relative"}} className="trio"></div>
                <div className="shadow">
                    <img  style={{height: "100%", position: "absolute", zIndex:"1", top:"10%", left: "2%"}} src="./hp-primary-desktop_e0dab1f509.svg" alt="error"/>
                </div>
                <img style={{height: "60%", position: "absolute", zIndex:"1", top:"40%", left: "20%"}} src="./hp-step1-2D_aeea862f0b.svg" alt="error"/>
            </div>
    )
}

const StepImageRight= () => {
    return(
            <div className="step-image">
                <div style={{position:"relative"}} className="trio1"></div>
                <div className="shadow">
                    <img  style={{height: "100%", position: "absolute", zIndex:"1", top:"10%", right: "2%"}} src="./hp-primary-desktop_e0dab1f509.svg" alt="error"/>
                </div>
                <img style={{height: "60%", position: "absolute", zIndex:"1", top:"40%", right: "10%"}} src="./hp-step1-2D_aeea862f0b.svg" alt="error"/>
            </div>
    )
}

export {
    StepImageLeft,
    StepImageRight
}