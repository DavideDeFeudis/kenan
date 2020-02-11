import React from "react";
import YoutubeEmbedVideo from "youtube-embed-video";
import styled from "styled-components"
import '../styles/index.scss'

export default function VideoSection() {

    return (
        // <VideoContainer className='VideoSection'>
        // <div className="video-container container my-5 embed-responsive embed-responsive-16by9">
        <YoutubeEmbedVideo videoId="RnDC9MXSqCY" suggestions={false} />
        // </div>
        // <div className="container main-content text-center">
        //     <p className='my-5' >
        //         {/* {description} */}
        //     </p>
        // </div>
        // </VideoContainer>
    )
}

const VideoContainer = styled.div`
    .video-container {
        background-image: url(${props => props.background});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`;
