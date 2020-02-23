import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
// import ReactPlayer from 'react-player'
// import backgroundSmall from "../images/sunsonImg.jpg";
import backgroundLarge from "../images/sunsonImg.jpg";
// import Background from './Background';

export default function VideoSunson() {
    return (
        <div className='Video'>
            <Navbar />
            {/* <div className="wrap">
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=FenzrFVlvx4'
                        width='100%'
                        height='100%'
                    />
                </div>
            </div> */}
            {/* <Background
                small={backgroundSmall}
                large={backgroundLarge}
            /> */}
            <div id='sunson-img-container' className="container">
                <img id='sunson-img' src={backgroundLarge} alt="Sunson choreography" />
            </div>
            <div className="container main-content text-center">
                <p>
                    Choreography: Kenan Dinkelmann<br />
                    Dancers: Josephine Haas, Asuka J. Riedl, Felipe Fizkal, Carlos Aller<br />
                    Music: Kangding Ray
                </p>
            </div>
            <Footer />
        </div>
    )
}
