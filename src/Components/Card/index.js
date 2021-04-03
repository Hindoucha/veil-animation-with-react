import React from "react"
import "./card.css"

// import components
import Item from "../Item"

const Card = ({title, items}) => {
    return(
        <div className="card">
            <div>{title}</div>
            {
                items.map((el)=> <Item key={el} 
                item={el} />)
            }
        </div>
    )
}

export default Card