import React, { useContext, useState } from "react";
import '../styles/index.scss';
import { Link } from "react-router-dom";
import { Context } from "../context";
import SignUpForm from "./SignUpForm";
import closeWindowIcon from "../images/close-window.png";

export default function Modal() {
  console.log(useContext(Context))
  const { modalItem: { date, title }, isModalOpen, closeModal } = useContext(Context)
  const [modalMessage, setModalMessage] = useState('')

  const setFeedback = (feedback) => {
    setModalMessage(feedback) // Warning: Can't perform a React state update on an unmounted component.
  }

  const handleClick = () => {
    setModalMessage('')
    closeModal()
  }

  if (!isModalOpen) {
    return null;
  } else if (modalMessage) {
    return (
      <div className="container modal" id="feedback-modal">
        <div className="row">
          <div className="mx-auto p-5 text-center" id="modal">
            <h2>{modalMessage}</h2>
            <Link to="/workshops">
              <img className="closeModal" onClick={handleClick} src={closeWindowIcon} alt="Close" />
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container modal" id="form-modal">
        <div className="row">
          <div className="mx-auto p-5 text-center" id="modal">
            <Link to="/workshops">
              <img className="closeModal" onClick={handleClick} src={closeWindowIcon} alt="Close" />
            </Link>
            <h2>{title}</h2>
            <h4>{date}</h4>
            <p className='my-4'>
              Enter your data to sign up.<br />You will receive payment details via email.
              </p>
            <SignUpForm
              setFeedback={setFeedback}
              subjectContent={`Sign up - ${title} ${date}`}
            />
          </div>
        </div>
      </div>
    );
  }
}
