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
            description: "A WordPress website with a custom coded theme to chronicle 1958 Rickenbacker 325 models.",
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
            link: "/grunyons",
            deployed: "https://thegrunyons.com/",
            github: "https://github.com/adamalcantara/grunyons"
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
                <div id='card' className='h-fit w-[100%] flex flex-col justify-between'>
                    {/* title */}
                    <div className='text-3xl text-center'>
                        <p>{card.title}</p>
                    </div>

                    {/* Box for content */}
                    <div className='flex flex-col md:flex-row'>
                        {/* Image */}
                        <div className='md:w-1/4'>
                            <img src={card.image}></img>
                        </div>

                        {/* Project content */}
                        <div className='md:w-3/4'>
                            <p className='text-2xl'>{card.description}</p>
                            <div>
                                {card.deployed ? <a href={card.deployed} target='_blank' className='bg-black text-white p-2 mr-2 inline-block'>Deployed Project</a> : ''}
                                <a href={card.github} target='_blank' className='bg-black text-white p-2 mr-2 inline-block'>GitHub Repository</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    };

    return <div className='w-1/2 mx-auto'>
        {cardInfo.map(renderCard)}
    </div>;
}

export default Card