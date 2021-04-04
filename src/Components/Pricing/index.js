import React from "react"
import "./pricing.css"

// import components
import Card from "../Card"

const Pricing = () => {

    const items = ["one","two","three"]

    return(
        <div className="pricing">
            <div className="container row">
            <Card title="Bronze plan" color="" items={items}/>
            <Card title="Dilver plan" color="" items={items}/>
            <Card title="Gold plan" color="" items={items}/>
            </div>
        </div>
    )
}

export default Pricing