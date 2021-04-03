import React from "react"
import "./item.css"

const Item = ({item}) => {
    return(
        <div className="item">
            <img src="./check-mark.png" alt="error"/>
            <div>{item}</div>
        </div>
    )
}

export default Item