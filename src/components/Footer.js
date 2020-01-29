import React from 'react'
import '../index.css';
import { SocialIcon } from 'react-social-icons';


export default function Footer() {
    return (
        <footer className="text-center py-4">
            <SocialIcon className="mx-1" url="http://instagram.com" bgColor="#919191" style={{ height: 40, width: 40 }}/>
            <SocialIcon className="mx-1" url="http://youtube.com" bgColor="#919191" style={{ height: 40, width: 40 }}/>
            <SocialIcon className="mx-1" url="https://vimeo.com/user10326182" bgColor="#919191" style={{ height: 40, width: 40 }}/>
        </footer>
    )
}
