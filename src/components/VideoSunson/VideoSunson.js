import React from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import backgroundSmall from "../../images/sunsonImg_500.jpg";
import backgroundLarge from "../../images/sunsonImg_1920.jpg";
import Background from '../Background/Background';

export default function VideoSunson() {
    return (
        <div className='Sunson'>
            <Navbar />
            <Background
                small={backgroundSmall}
                large={backgroundLarge}
            />
            <div className="container main-content">
                <p>
                    Choreography: Kenan Dinkelmann<br />
                    Dancers: Josephine Haas, Asuka J. Riedl, Felipe Fizkal, Carlos Aller<br />
                    Music: Kangding Ray
                </p>
            </div>
            <Footer />
        </div>
    )
}
