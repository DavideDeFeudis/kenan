import React from 'react'
import '../index.css';
import backgroundLarge from "../images/workshops_1920.jpg";
// import backgroundSmall from "../images/workshops_500.jpg";
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';
import Workshop from './Workshop';

export default function Workshops() {
    return (
        <div className='Workshops'>
            <Navbar />
            <Background
                // small={backgroundSmall}
                large={backgroundLarge}
            />
            <div className="container main-content text-center">
                <p>
                    Drawing inspirations from martial arts and yoga, the warm up has the purpose to tune the dancers into a clear and subtle state of body and mind before their practice and execution. Challenging postures alongside movement flow with circular motions and spirals will be introduced in order to provide better awareness of the body, especially for wrists and legs.
    
                    The warm up is followed by a series of movement patterns used as a tool to explore the mechanics of the spine. Introducing dynamics of balancing, stabilizing, falling, rolling, flipping and melting down in order to maintain flow without unnecessary tension. The patterns will increase in complexity and then be linked into longer sequences with acrobatic elements.
                    
                    The main part of the seminar consists of high energy movement phrases based on Kenans choreographic work which is influenced by various backgrounds such as Capoeira, Judo, Release-Technic and Breakdance. Improvisation tasks, either alone or with a partner will be present during the whole workshop in order to explore the movement material from another viewpoint.
                </p>
                <Workshop 
                    date='20.02.2020'
                    title='Workshop title 1'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita quasi hic quas fuga? Facilis, asperiores! Veritatis harum debitis nobis repudiandae, reprehenderit labore necessitatibus quis blanditiis, beatae maxime ipsa ab dicta ratione corrupti itaque accusantium? Quis quidem facilis.'
                />
                <Workshop 
                    date='30.03.2020'
                    title='Workshop title 2'
                    description='Facilis, asperiores! Veritatis harum debitis nobis repudiandae, reprehenderit labore necessitatibus quis blanditiis, beatae maxime ipsa ab dicta ratione corrupti itaque accusantium? Quis quidem facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita quasi hic quas fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident expedita quasi hic quas fuga?'
                />
            </div>
            <Footer />
        </div>
    )
}
