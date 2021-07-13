import React from "react";
import "../../styles/index.scss";
import backgroundLarge from "../../images/workshops_1920.jpg";
import backgroundSmall from "../../images/workshops_500.jpg";
import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import WorkshopsList from "../WorkshopsList/WorkshopsList";

/**
 * The workshops page. Displays a background image, text and the workshop list.
 */
export default function Workshops() {
    return (
        <div className="Workshops">
            <Navbar />
            <Background small={backgroundSmall} large={backgroundLarge} />
            <div className="container w-144 px-12 py-12 text-center m-auto">
                <p>
                    Drawing inspirations from martial arts and yoga, the warm up has the purpose to tune the dancers into a clear and subtle
                    state of body and mind before their practice and execution. Challenging postures alongside movement flow with circular
                    motions and spirals will be introduced in order to provide better awareness of the body, especially for wrists and legs.
                    <br />
                    <br />
                    The warm up is followed by a series of movement patterns used as a tool to explore the mechanics of the spine.
                    Introducing dynamics of balancing, stabilizing, falling, rolling, flipping and melting down in order to maintain flow
                    without unnecessary tension. The patterns will increase in complexity and then be linked into longer sequences with
                    acrobatic elements.
                    <br />
                    <br />
                    The main part of the seminar consists of high energy movement phrases based on Kenans choreographic work which is
                    influenced by various backgrounds such as Capoeira, Judo, Release-Technic and Breakdance. Improvisation tasks, either
                    alone or with a partner will be present during the whole workshop in order to explore the movement material from another
                    viewpoint.
                </p>
            </div>
            <WorkshopsList user />
            <Footer />
            <Modal parentPage="/workshops" />
        </div>
    );
}
