import React from 'react'
import './Card.css'
const Card = props =>(
   // <div className="cardGroup">
        <div className="card">
            <img src={props.image}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
        
   // </div>
)

export default Card