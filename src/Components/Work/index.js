import React from "react"
import "./work.css"

// import components
import {StepLeft, StepRight} from "../Step"

const Work = () => {

    const items = ["one","two","three"]

    return(
        <div className="work">
            <div className="container">
            <StepRight title="step. 1" subTitle="Create automatic daily tasks." description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto, maiores eveniet repellat quisquam sequi! Eaque dolor pariatur magnam alias vero libero sit maxime architecto quae, hic voluptatibus praesentium laudantium!"/>
            <StepLeft title="step. 2" subTitle="Add new source" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto, maiores eveniet repellat quisquam sequi! Eaque dolor pariatur magnam alias vero libero sit maxime architecto quae, hic voluptatibus praesentium laudantium!"/>
            </div>
        </div>
    )
}

export default Work