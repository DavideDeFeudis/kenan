import React, { useContext } from "react";
import '../index.css';
import { Context } from "../context";
import Navbar from './Navbar';
import Footer from './Footer';
import VideoSection from './VideoSection';

export default function Choreography() {
    const { videos } = useContext(Context)

    return (
        <div className='Choreography'>
            <Navbar />
            {
                videos.map(video => {
                    return <VideoSection
                        key={video.id}
                        video={video}
                    />
                })
            }
            <Footer />
        </div>
    )
}
