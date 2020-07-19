import React from "react";
import "../styles/index.scss";
import profilePic from "../images/kenan_profile_300.jpg";
import backgroundLarge from "../images/about_1920.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "./Background";

export default function About() {
  return (
    <div data-test="about" className="About">
      <Navbar data-test="navbar" />
      <div id="background">
        <Background data-test="background" large={backgroundLarge} />
      </div>
      <div data-test="profile-container"  id="profile-container" className="container-fluid">
        <img data-test="profile-pic"  id="profile-pic" src={profilePic} alt="Kenan" />
        <p data-test="about-text"  id="about-text">
          Kenan Dinkelmann grew up in Passau, Germany and graduated from Artez,
          School of Dance, Arnhem with a BA of performing arts and completed the
          SEAD postgraduate program Bodhi Project directed by Susan Quinn where
          he toured works by Jozef Frucek & Linda Kapetanea, Martin Nachbar and
          Robert Clark in Europe. As freelance dancer Kenan worked with Johannes
          Wieland, Marion Sparber, Ivan Perez, Unterwegstheater and Anton
          Lachky. From 2015 till 2017 he joined the dance company of
          Stadttheater Bielefeld where he danced in works by Wim Vandekeybus,
          Simone Sandroni and Sharon Fridman. Kenan is guest teacher at Die
          Etage, Berlin, Stadttheater Bielefeld, Marameo Berlin, Staatstheater
          Braunschweig, TRAK Dance Ensemble, Tanzbüro Basel and Profitraining
          Leipzig. As a choreographer Kenan created the piece „Astral“ which was
          premiered in Sofia, Bulgaria with further shows in Dock11 Berlin and
          Arnhem, Netherlands.
        </p>
      </div>
      <Footer data-test="footer" />
    </div>
  );
}
