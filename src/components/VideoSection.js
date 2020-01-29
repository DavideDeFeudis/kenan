import React from 'react'
import '../index.css';

export default function VideoSection(props) {
    const { videoUrl, description } = props.video

    return (
        <div className='VideoSection'>
            <div className="container my-5 embed-responsive embed-responsive-16by9">
                <iframe title="embedsPage" className="embed-responsive-item" src={videoUrl}
                    allowfullscreen>
                </iframe>
            </div>
            <div className="container main-content text-center">
                <p className='my-5' >
                    {description}
                </p>
            </div>
        </div>
    )
}
