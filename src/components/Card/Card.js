import React from "react";
import spider from '../../images/spider.jpg'

function Card({ title, image, desc }) {
    return (
        <div className="card">
            <div className="card-header">
                <img src={image} />
            </div>
            <div className="card-body">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-details">
                    <p>{desc}</p>
                </div>
                <div className="card-button">
                    <button>Watch Here</button>
                </div>
            </div>
        </div>
    )
}

export default Card;