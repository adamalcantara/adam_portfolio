import React from 'react'
import { Link } from 'react-router-dom';

// Image imports
import iphone from "../assets/card_images/iphone.png";
import FinishCheckerImg from "../assets/card_images/finishchecker.png";

function Card() {

    const cardInfo = [
        { 
            id: "phone",
            image: iphone,
            title: "iPhone Clone",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            link: "/iphoneclone"
        },
        {
            id: "finishchecker",
            image: FinishCheckerImg,
            title: "Finish Checker",
            description: "Some text",
            link: "/finishchecker"
        }
    ]
    const renderCard = (card, index) => {
      return (
        <div>
            <div id='card' className='h-[100%] flex flex-col justify-between'>
                <div>
                    {/* Image */}
                    <Link to={card.link}><img src={card.image}></img></Link>
                    {/* Title */}
                    <p className='text-3xl mt-2 mb-2'>{card.title}</p>
                    {/* Description */}
                    <p className=''>{card.description}</p>
                </div>
                {/* Button */}
                <div className='mt-6 mb-6 bottom-0 w-[100%] flex  justify-end'>
                    <div className='bg-black text-white p-4'>
                        <Link to={card.link}>Visit Project</Link>
                    </div>
                </div>
            </div>
        </div>
      )
    };

    return <div className='grid grid-cols-4 gap-4'>
        {cardInfo.map(renderCard)}
    </div>;
}

export default Card