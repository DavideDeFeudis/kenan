import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import ReactPlayer from 'react-player'

export default function VideoSection({ url, info }) {
    // console.log(url, info)
    return (
        <div className='Video'>
            <Navbar />
            <div className="wrap">
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url={url}
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
            <div className="container main-content text-center">
                <p>
                    {info}
                </p>
            </div>
            <Footer />
        </div>
    )
}