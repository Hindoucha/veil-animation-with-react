import React from "react"
import "./content.css"

const Content = () => {
    return(
        <div className="content">
            <div className="text-and-image">
                <div className="text">
                    <div className="title">We get data</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad alias minima, iure animi blanditiis harum molestias maiores adipisci consequuntur delectus deserunt atque odit reiciendis beatae voluptate at deleniti quidem temporibus.</div>
                    <div className="btns">
                        <div className="button" style={{backgroundColor: "white"}}>Start Now</div>
                        <div className="button learn" style={{border: "solid 1px black"}}>Learn More</div>
                    </div>
                </div>
                <div className="image">
                    <img src="./polygone.png" alt="error"/>
                </div>
            </div>
        </div>
    )
}

export default Content