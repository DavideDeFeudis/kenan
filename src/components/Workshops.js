import React, { useState, useContext } from 'react'
import '../index.css';
import backgroundLarge from "../images/flow_acrobatics_1920.jpg";
// import backgroundSmall from "../images/workshops_500.jpg";
import { workshops } from '../data'
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';
import Workshop from './Workshop';
import Modal from './Modal';
// import { Consumer } from "../context";

export default function Workshops() {
    // const { openModal } = useContext(Consumer)

    return (
        <div className='Workshops'>
            <Navbar />
            {/* <Background
                // small={backgroundSmall}
                large={backgroundLarge}
            /> */}
            <div className="container main-content text-center">
                <p>
                    Drawing inspirations from martial arts and yoga, the warm up has the purpose to tune the dancers into a clear and subtle state of body and mind before their practice and execution. Challenging postures alongside movement flow with circular motions and spirals will be introduced in order to provide better awareness of the body, especially for wrists and legs.<br/><br/>

                    The warm up is followed by a series of movement patterns used as a tool to explore the mechanics of the spine. Introducing dynamics of balancing, stabilizing, falling, rolling, flipping and melting down in order to maintain flow without unnecessary tension. The patterns will increase in complexity and then be linked into longer sequences with acrobatic elements.<br/><br/>

                    The main part of the seminar consists of high energy movement phrases based on Kenans choreographic work which is influenced by various backgrounds such as Capoeira, Judo, Release-Technic and Breakdance. Improvisation tasks, either alone or with a partner will be present during the whole workshop in order to explore the movement material from another viewpoint.
                </p>
                {
                    workshops.map(workshop => {
                        const { id, date, title, time, address, target, price } = workshop
                        return <Workshop
                            key={id}
                            id={id}
                            date={date}
                            title={title}
                            time={time}
                            address={address}
                            target={target}
                            price={price}
                        />
                    })
                }
            </div>
            <Footer />
            <Modal />
        </div>
    )
}
