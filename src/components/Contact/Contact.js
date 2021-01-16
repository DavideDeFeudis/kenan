import React from 'react'
import '../../styles/index.scss';
import backgroundLarge from "../../images/contact_1920.jpg";
import backgroundSmall from "../../images/contact_500.jpg";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Background from '../Background/Background';
import ContactForm from '../ContactForm/ContactForm';

export default function Contact() {
    return (
        <div className='Contact'>
            <Navbar />
            <Background
                small={backgroundSmall}
                large={backgroundLarge}
            />
            <ContactForm />
            <Footer />
        </div>
    )
}
