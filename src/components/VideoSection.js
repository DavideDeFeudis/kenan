import React from "react";
import YoutubeEmbedVideo from "youtube-embed-video";
import styled from "styled-components"
import '../styles/index.scss'

export default function VideoSection() {

    return (
        <YoutubeEmbedVideo videoId="RnDC9MXSqCY" suggestions={false} />
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
