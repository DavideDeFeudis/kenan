import React from 'react'
import '../index.css';
import backgroundLarge from "../images/contact_1920.jpg";
// import backgroundSmall from "../images/contact_500.jpg";
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';
// import { Consumer } from "../context";
import Form from './Form';

export default function Contact() {
    // const { handleChange, handleSubmit } = useContext(Consumer)

    return (
        <div className='Contact'>
            <Navbar />
            <Background
                // small={backgroundSmall}
                large={backgroundLarge}
            />
            <Form />
            <Footer />
        </div>
    )
}
