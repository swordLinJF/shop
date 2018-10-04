import React from 'react'
import './Card.css'
const Card = props =>(
   // <div className="cardGroup">
        <div className="card">
            <img src={props.image}/>
            <p>{props.text}</p>
            <h3>￥899</h3>
            <div className="mask"></div>
        </div>
       
   // </div>
)

export default Card