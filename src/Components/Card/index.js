import React from "react"
import "./card.css"

// import components
import Item from "../Item"

const Card = ({title, items}) => {
    return(
        <div className="card">
            <div style={{display:"flex", justifyContent:"center", marginBottom:"10%"}}>{title}</div>
            {
                items.map((el)=> <Item key={el} 
                item={el} />)
            }
            <div style={{margin:"auto"}} className="button">Buy now !</div>
        </div>
    )
}

export default Card