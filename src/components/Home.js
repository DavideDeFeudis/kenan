import React from 'react'
// import styled from 'styled-components'
// import '../Home.css';
import '../index.css';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Home() {
    return (
        <div className='Home'>
            <Navbar />
            <div className="container main-content text-center">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi dolore rem amet aut magnam voluptates excepturi maiores soluta perferendis beatae expedita vero esse voluptate inventore commodi, quisquam, ex necessitatibus voluptas eos. Incidunt quos soluta dignissimos eveniet esse. Aperiam accusantium molestiae ipsa porro repellendus laudantium adipisci quasi laborum incidunt sed.
                </p>
            </div>
            <Footer />
        </div>
    )
}
