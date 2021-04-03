import React from "react"
import "./work.css"

// import components
import {StepLeft, StepRight} from "../Step"
import Card from "../Card"

const Work = () => {

    const items = ["one","two","three"]

    return(
        <div className="work">
            <div className="container">
            <StepRight title="step. 1" subTitle="Create automatic daily tasks." description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto, maiores eveniet repellat quisquam sequi! Eaque dolor pariatur magnam alias vero libero sit maxime architecto quae, hic voluptatibus praesentium laudantium!"/>
            <StepLeft title="step. 2" subTitle="Add new source" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto, maiores eveniet repellat quisquam sequi! Eaque dolor pariatur magnam alias vero libero sit maxime architecto quae, hic voluptatibus praesentium laudantium!"/>
            <StepRight title="step. 3" subTitle="View and edit data anytime." description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto, maiores eveniet repellat quisquam sequi! Eaque dolor pariatur magnam alias vero libero sit maxime architecto quae, hic voluptatibus praesentium laudantium!"/>
            <Card title="a card" items={items}/>
            </div>
            <div>appres</div>
        </div>
    )
}

export default Work