import React from "react";
import "../../styles/index.scss";
import backgroundLarge from "../../images/about_1920.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Background from "../Background/Background";
import classes from "./Home.module.css";
import profilePic from "../../images/kenan_profile_300.jpg";
import textContent from "./HomeTextContent";

/**
 * The home page. Displays a background image, an image and text.
 */
export default function Home() {
    return (
        <div data-test="about" className="home">
            <Navbar data-test="navbar" className={classes.navbar} />
            <div className={classes.bgWrapper}>
                <Background data-test="background" large={backgroundLarge} />
            </div>
            <div data-test="profile-container" className={classes.profileContainer}>
                <img data-test="profile-pic" className={classes.profilePic} src={profilePic} alt="Kenan" />
                <p data-test="about-text" className={classes.aboutText}>
                    {textContent.paragraphs[0]}
                </p>
            </div>
            <Footer data-test="footer" />
        </div>
    );
}
