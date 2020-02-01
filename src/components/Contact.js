import React from 'react'
import '../index.css';
import backgroundLarge from "../images/contact_1920.jpg";
// import backgroundSmall from "../images/contact_500.jpg";
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <div className='Contact'>
            <Navbar />
            <Background
                // small={backgroundSmall}
                large={backgroundLarge}
            />
            <ContactForm />
            <Footer />
        </div>
    )
}
