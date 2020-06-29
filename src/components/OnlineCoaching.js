import React, { useContext } from "react";
import "../styles/index.scss";
import backgroundLarge from "../images/onlineCoaching_1920.jpg";
import backgroundSmall from "../images/onlineCoaching_500.jpg";
import Background from "./Background";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { DispatchContext } from "../context";
import { openModalOnlineCourse } from "../ActionCreators";

export default function OnlineCoaching() {
  const dispatch = useContext(DispatchContext);

  return (
    <div className="OnlineCoaching">
      <Navbar />
      <Background small={backgroundSmall} large={backgroundLarge} />
      <div className="container main-content">
        <p>
          I decided to start the Flow Acrobatics Online Coaching because it is
          great way for me to connect with people all over the world despite the
          current situation with COVID -19.
          <br />
          <br />
          The online coaching is not a fixed program. It is individual. It is
          for you.
          <br />
          <br />
          What you get:
        </p>
        <br />
        <ul>
          <li>
            High quality instructional videos of warm ups, tutorials, movement
            phrases and improvisations
          </li>
          <li>Individual trainings plan</li>
          <li>
            Possibility of being in contact with me via video call or email
            every week
          </li>
        </ul>
        <hr></hr>
        <p>
          The videos are mainly recorded material. I have a large pool of
          already existing material but also make new videos based on the level
          and needs of the students. You will be able to keep the videos forever
          so you can also use them after the 6 weeks are over.
          <br />
          <br />
          The structure of the plan will be dynamic which means it can adapt to
          everything else that is happening in your life. Illness, job problems,
          bad night of sleep, etc. Depending on your goal, 3-5 training session
          per week are highly suggested.
          <br />
          <br />
          What kind of content?
        </p>
        <br />
        <ul>
          <li>Basic strength and mobility</li>
          <li>Floor work / release technique</li>
          <li>Improvisation</li>
          <li>Acrobatics</li>
          <li>
            Integration of all elements in the form of phrases (Flow Acrobatic
            Phrases)
          </li>
        </ul>
        <hr></hr>
        <p>
          What will I get out of the online coaching?
          <br />
          <br /> The more time and love you put into it the more it will
          flourish and nourish you. So it totally depends on you. All I do is
          give feedback on the videos you send me and answer your questions
          regarding practice structure, nutrition and recovery.
          <br />
          <br />
          Timeline of getting into online coaching:
        </p>
        <br />
        <ul>
          <li>First getting to know video call</li>
          <li>
            Then I give you a little questionnaire so you can start to think
            what your goals are
          </li>
          <li>Next I will ask you to send me a video of your dancing/moving</li>
          <li>
            Based on the questionnaire and your video I will create a training
            routine for you
          </li>
        </ul>
        <hr></hr>
        <p>
          For all levels from beginners to professional dancers/movers/acrobats.
          <br />
          Duration &amp; price: 6 weeks - 300€
          <br />
          <br />
        </p>
        <div className="flex-center">
          <Link to="/online-coaching">
            <Button
              type="button"
              className="mt-2"
              onClick={() => dispatch(openModalOnlineCourse())}
            >
              Sign up
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
      <Modal parentPage="/online-coaching" />
    </div>
  );
}
