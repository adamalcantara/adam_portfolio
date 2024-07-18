import React from 'react'

// Image imports
import iphone from "../assets/card_images/iphone.png";
import { Link } from 'react-router-dom';

function Card() {

    const cardInfo = [
        { 
            id: "phone",
            image: iphone,
            title: "iPhone Clone",
            description: "Some text",
            link: "/iphoneclone"
        }
    ]
    const renderCard = (card, index) => {
      return (
        <div>
            <div id='card'>
                {/* Image */}
                <img src={card.image}></img>
                {/* Title */}
                <p>{card.title}</p>
                {/* Description */}
                <p>{card.description}</p>
                {/* Button */}
                <Link to={card.link}>Visit Project</Link>
            </div>
        </div>
      )
    };

    return <div>
        {cardInfo.map(renderCard)}
    </div>;
}

export default Card