import React from "react";
import Card from "./Card";
import './Card.css'
import { movies } from '../../data'

function CardContainer() {
    return (
        <div className="container">
            {movies.map((item) => <Card id={item.id} title={item.title} image={item.image} desc={item.desc} />)}
        </div>
    )
}

export default CardContainer;