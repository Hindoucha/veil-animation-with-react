import React from "react"
import "./step.css"

//omport components
import {StepImageLeft, StepImageRight} from "../StepImage"
import StepDescription from "../StepDescription"
import Points from "../Points"

const StepRight = (props) => {
    return(
            <div className="step">
                <StepImageLeft />
                <StepDescription title={props.title} subTitle={props.subTitle} description={props.description} />
                <div style={{position: "absolute", bottom: "17px", width:"15vw"}}>
                    <Points />
                </div>
            </div>
    )
}

const StepLeft = (props) => {
    return(
            <div className="step">
                <StepDescription title={props.title} subTitle={props.subTitle} description={props.description}/>
                <StepImageRight />
            </div>
    )
}

export { 
    StepRight,
    StepLeft
}