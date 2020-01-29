import React from 'react'
import '../index.css';
// import backgroundLarge from "../images/choreography_1920.jpg";
// import backgroundSmall from "../images/choreography_500.jpg";
import Navbar from './Navbar';
import Footer from './Footer';
// import Background from './Background';

export default function Choreography() {
    return (
        <div className='Choreography'>
            <Navbar />
            <div className="mt-4 container embed-responsive embed-responsive-16by9">
                <iframe title="embedsPage" className="embed-responsive-item" src="https://player.vimeo.com/video/368775262"
                    allowfullscreen></iframe>
            </div>
            {/* <Background
                // small={backgroundSmall}
                large={backgroundLarge}
            /> */}
            <div className="container main-content text-center">
                <p className='mt-5' >
                    ASTRAL is set in a fictional world where humankind, through its behavior, has made survival on planet Earth impossible. Climate change has progressed so drastically that no human being can survive on Earth in 10 years. Scientists travel to Mars to build up a new society. How do they react to suddenly being pulled out of their normal living environment? Humanity is forced to question past patterns of behavior and create new concepts to secure the long-term future of society on a new planet. How does the individual deal with severe changes on a psychological level? ASTRAL is an attempt to display the process of dealing with changes with and within the body.

                    Direction and choreography: Kenan Dinkelmann
                    Performers: Nitzan Moshe, Miriam Kaya, Joshua Smith, Max Makowski
                    Supported by Derida Dance Centre, Sofia, Bulgaria
                </p>
            </div>
            <Footer />
        </div>
    )
}
