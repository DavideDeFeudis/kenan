import React from 'react'
import '../index.css';
import backgroundLarge from "../images/contact_1920.jpg";
// import backgroundSmall from "../images/contact_500.jpg";
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';
import Form from './Form';

export default function Contact() {
    return (
        <div className='Contact'>
            <Navbar />
            <Background
                // small={backgroundSmall}
                large={backgroundLarge}
            />
            <Form subject textarea buttonText='Send' />
            <Footer />
        </div>
    )
}
