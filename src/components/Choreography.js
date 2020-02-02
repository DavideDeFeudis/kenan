import React from 'react'
import '../index.css';
import { videos } from '../data'
// import backgroundLarge from "../images/choreography_1920.jpg";
// import backgroundSmall from "../images/choreography_500.jpg";
import Navbar from './Navbar';
import Footer from './Footer';
import VideoSection from './VideoSection';
// import Background from './Background';
import backgroundSmall from "../images/home_500.jpg";

export default function Choreography() {
    return (
        <div className='Choreography'>
            <Navbar />
            {/* <Background
                    // small={backgroundSmall}
                    large={backgroundLarge}
            /> */}
            {
                videos.map(video => {
                    return <VideoSection
                        key={video.id}
                        video={video}
                        // background={backgroundSmall}
                    />
                })
            }
            <Footer />
        </div>
    )
}
