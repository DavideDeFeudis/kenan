import React, { useContext } from "react";
import '../styles/index.scss';
import { Context } from "../context";
import Navbar from './Navbar';
import Footer from './Footer';
import VideoSection from './VideoSection';
import YoutubeEmbedVideo from "youtube-embed-video";
import Vimeo from 'react-vimeo'
import ReactPlayer from 'react-player'

export default function Choreography() {
    const { videos } = useContext(Context)

    // const videoId = '368775262'
    // const url = 'https://www.youtube.com/watch?v=YbAYMQC_ZaE&list=PLui6Eyny-UzwTtWJwQnpJaAqobMkXMeS-&index=2'

    return (
        <div className='Choreography'>
            <Navbar />

            {/* https://www.youtube.com/watch?v=dYEsi-ORb44 */}
            {/* <div className="container">
                <YoutubeEmbedVideo size='large' videoId="dYEsi-ORb44" suggestions={false} />
            </div> */}

            {/* <Vimeo videoId={ videoId } autoplay={false} /> */}

            <div className="wrap">
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=dYEsi-ORb44'
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>

            {/* <ReactPlayer
                url={url}
                config={{
                    youtube: {
                        playerVars: { showinfo: 1 }
                    }
                }}
            /> */}

            {/* {
                videos.map(video => {
                    return <VideoSection
                        // key={video.id}
                        // url={url}
                    />
                })
            } */}
            <Footer />
        </div>
    )
}