import React from 'react'
import './App.css'

export default function Card(props) {
    return (
        <div className="cardContainer">
            <div className="imageContainer">
                <img src={props.image} height='200px' width='200px'/>
            </div>
            <div className="detailsContainer">
                <h2>name:{props.name}</h2>
                <h2>email:{props.email}</h2>
            </div>
        </div>
    )
}
