import React from 'react'
import styled from "styled-components";
import '../index.css';

export default function VideoSection(props) {
    const { videoUrl, description, background } = props.video

    return (
        <VideoContainer background={background} className='VideoSection'>
            <div className="video-container container my-5 embed-responsive embed-responsive-16by9">
                <iframe src={videoUrl}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
                {/* <iframe title="embedsPage" className="embed-responsive-item" src={videoUrl}
                    allowFullScreen>
                </iframe> */}
            </div>
            <div className="container main-content text-center">
                <p className='my-5' >
                    {description}
                </p>
            </div>
        </VideoContainer>
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