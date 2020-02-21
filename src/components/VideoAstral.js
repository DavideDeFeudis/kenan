import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import ReactPlayer from 'react-player'

export default function VideoAstral() {
    return (
        <div className='Video'>
            <Navbar />
            <div className="wrap">
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=muCeDHP7G60'
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
            <div className="container main-content text-center">
                <p>
                    ASTRAL is set in a fictional world where humankind, through its behavior, has made survival on planet Earth impossible. Climate change has progressed so drastically that no human being can survive on Earth in 10 years. Scientists travel to Mars to build up a new society. How do they react to suddenly being pulled out of their normal living environment? Humanity is forced to question past patterns of behavior and create new concepts to secure the long-term future of society on a new planet. How does the individual deal with severe changes on a psychological level? ASTRAL is an attempt to display the process of dealing with changes with and within the body.
                    <br />
                    <br />
                    Direction and choreography: Kenan Dinkelmann. Performers: Nitzan Moshe, Miriam Kaya, Joshua Smith, Max Makowski.
                    <br />
                    Supported by Derida Dance Centre, Sofia, Bulgaria
                </p>
            </div>
            <Footer />
        </div>
    )
}
