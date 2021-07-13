import React from "react";
import "../../styles/index.scss";
import backgroundLarge from "../../images/workshops_1920.jpg";
import backgroundSmall from "../../images/workshops_500.jpg";
import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import WorkshopsList from "../WorkshopsList/WorkshopsList";
import textContent from "./WorkshopsTextContent";

/**
 * The workshops page. Displays a background image, text and the workshop list.
 */
export default function Workshops() {
    return (
        <div className="Workshops">
            <Navbar />
            <Background small={backgroundSmall} large={backgroundLarge} />
            <div className="container w-144 px-12 py-12 text-center m-auto">
                {textContent.paragraphs.map((p, i) => (
                    <p key={i} className="mb-4">
                        {p}
                    </p>
                ))}
            </div>
            <WorkshopsList user />
            <Footer />
            <Modal parentPage="/workshops" />
        </div>
    );
}
