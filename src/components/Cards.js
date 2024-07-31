import React from 'react'
import { Link } from 'react-router-dom';

// Image imports
import iphone from "../assets/card_images/iphone.png";
import FinishCheckerImg from "../assets/card_images/finishchecker.png";
import BookstoreImg from "../assets/card_images/bookstore.png";
import GuitarologistImg from "../assets/card_images/theguitarologist.png";
import GrunyonsImg from "../assets/card_images/grunyons.png";
import ThreeTwentyFiveImg from "../assets/card_images/threetwentyfivearchive.png";

function Card() {

    const cardInfo = [
        {
            id: "threetwentyfive",
            image: ThreeTwentyFiveImg,
            title: "325 Archive",
            link: "/325"
        },
        {
            id: "bookstore",
            image: BookstoreImg,
            title: "Book Tracker",
            description: "A MERN stack application which supports the CRUD method and allows users to track book information.",
            link: "/booktracker"
        },
        {
            id: "grunyons",
            image: GrunyonsImg,
            title: "The Grunyons",
            description: "A website for Michigan-based acapella group The Grunyons which was built in ReactJS and features a Spotify implementation.",
            link: "/grunyons"
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
    ]
    const renderCard = (card, index) => {
        return (
            <div key={index}>
                <div id='card'  className='h-fit w-[100%] flex flex-col justify-between'>
                    <Link to={card.link}>
                        <div className='relative overflow-hidden'>
                            <img src={card.image} className='w-[100%] hover:opacity-85 '></img>
                            <div className='absolute h-full w-full flex items-center justify-center bottom-0 group-hover:bottom-0 bg-zinc-800/75 hover:opacity-100 sm:opacity-100 md:opacity-0 transition ease-in-out duration-500 text-white text-4xl'>
                                {card.title}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    };

    return <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {cardInfo.map(renderCard)}
    </div>;
}

export default Card