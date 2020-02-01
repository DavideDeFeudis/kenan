import React from 'react'
import '../index.css';
import backgroundLarge from "../images/home_1920.jpg";
import backgroundSmall from "../images/home_500.jpg";
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';

export default function Default() {

    return (
        <div className='Home'>
            <Navbar />
            <Background
                small={backgroundSmall}
                large={backgroundLarge}
            />
            <div className="container main-content text-center">
                <h1>
                    404 - page not found
                </h1>
            </div>
            <Footer />
        </div>
    )
}
