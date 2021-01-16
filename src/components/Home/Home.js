import React from "react";
import "../../styles/index.scss";
import backgroundLarge from "../../images/home_full_1920.jpg";
import backgroundSmall from "../../images/home_500.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Background from "../Background/Background";

export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Background small={backgroundSmall} large={backgroundLarge} />
      <Footer />
    </div>
  );
}
