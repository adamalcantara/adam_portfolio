import React from 'react'
import { Link } from 'react-router-dom';

// Image imports
import iphone from "../assets/card_images/iphone.png";
import FinishCheckerImg from "../assets/card_images/finishchecker.png";
import BookstoreImg from "../assets/card_images/bookstore.png";
import GuitarologistImg from "../assets/card_images/theguitarologist.png";
import GrunyonsImg from "../assets/card_images/grunyons.png";

function Card() {

    const cardInfo = [
        {
            id: "bookstore",
            image: BookstoreImg,
            title: "Book Tracker",
            description: "A MERN stack application which supports the CRUD method and allows users to track book information.",
            link: "/booktracker"
        },
        {
            id: "theguitarologist",
            image: GuitarologistImg,
            title: "The Guitarologist",
            description: "A website for my guitar photography built in ReactJS.",
            link: "/theguitarologist"
        },
        { 
            id: "phone",
            image: iphone,
            title: "iPhone Clone",
            description: "A clone of the iPhone 15 Pro built using Next.js with the intent of learning GSAP animations.",
            link: "/iphoneclone"
        },
        {
            id: "finishchecker",
            image: FinishCheckerImg,
            title: "Finish Checker",
            description: "A simple application that uses Open Weather API to help users determine whether they can spray nitrocellulose finishes.",
            link: "/finishchecker"
        },
        {
            id: "grunyons",
            image: GrunyonsImg,
            title: "The Grunyons",
            description: "A website for Michigan-based acapella group The Grunyons which was built in ReactJS and features a Spotify implementation.",
            link: "/grunyons"
        }
    ]
    const renderCard = (card, index) => {
      return (
        <div>
            <div id='card' className='h-[100%] flex flex-col justify-between border-b border-zinc-400'>
                <div>
                    {/* Image */}
                    <Link to={card.link}><img src={card.image} className='w-[100%] hover:opacity-85 transition ease-in-out duration-500'></img></Link>
                    {/* Title */}
                    <p className='text-3xl mt-2 mb-2'>{card.title}</p>
                    {/* Description */}
                    <p className=''>{card.description}</p>
                </div>
                {/* Button */}
                <div className='mt-6 mb-6 bottom-0 w-[100%] flex  justify-end'>
                        <Link to={card.link} className='bg-black hover:bg-zinc-700 text-white p-4'>Visit Project</Link>
                </div>
            </div>
        </div>
      )
    };

    return <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {cardInfo.map(renderCard)}
    </div>;
}

export default Card