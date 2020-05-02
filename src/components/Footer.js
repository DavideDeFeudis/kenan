import React from 'react'
import '../styles/index.scss';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer className="text-center py-4">
            <SocialIcon target="_blank" rel="noopener noreferrer" className="social-icon mx-1" url="https://www.instagram.com/kenandinkelmann/" bgColor="#919191" style={{ height: 35, width: 35 }}/>
            <SocialIcon target="_blank" rel="noopener noreferrer" className="social-icon mx-1" url="https://web.facebook.com/kenanchoreography" bgColor="#919191" style={{ height: 35, width: 35 }}/>
            <SocialIcon target="_blank" rel="noopener noreferrer" className="social-icon mx-1" url="https://www.youtube.com/channel/UCHUoc2LX0yZAGkzrfoGoCMA" bgColor="#919191" style={{ height: 35, width: 35 }}/>
            <SocialIcon target="_blank" rel="noopener noreferrer" className="social-icon mx-1" url="https://vimeo.com/user10326182" bgColor="#919191" style={{ height: 35, width: 35 }}/>
        </footer>
    )
}
