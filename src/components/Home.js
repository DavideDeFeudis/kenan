import React from 'react'
import '../index.css';
import backgroundLarge from "../images/home_1920.jpg";
import backgroundSmall from "../images/home_500.jpg";
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';

export default function Home() {

    return (
        <div className='Home'>
            <Navbar />
            <Background
                small={backgroundSmall}
                large={backgroundLarge}
            />
            <div className="container main-content text-center">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi dolore rem amet aut magnam voluptates excepturi maiores soluta perferendis beatae expedita vero esse voluptate inventore commodi, quisquam, ex necessitatibus voluptas eos. Incidunt quos soluta dignissimos eveniet esse. Aperiam accusantium molestiae ipsa porro repellendus laudantium adipisci quasi laborum incidunt sed.
                </p>
            </div>
            <Footer />
        </div>
    )
}
