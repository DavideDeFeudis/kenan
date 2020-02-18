import React, { useContext, useState } from "react";
import '../styles/index.scss';
import { Link } from "react-router-dom";
import { Context } from "../context";
import SignupForm from "./SignupForm";
import closeWindowIcon from "../images/close-window.png";

export function Modal({ modalItem, isModalOpen, closeModal }) {
  const [modalMessage, setModalMessage] = useState('')
  const {
    title,
    date,
    priceLabel1,
    priceLabel2,
    priceLabel3,
    priceLabel4,
    price1,
    price2,
    price3,
    price4
  } = modalItem

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
      <div className="modal-container">
        <div className="container">
          <div className="row">
            <div className="mx-auto p-5 text-center" id="feedback-modal">
              <Link to="/workshops">
                <img id="close-modal-icon" onClick={handleClick} src={closeWindowIcon} alt="Close" />
              </Link>
              <h2>{modalMessage}</h2>
              <div id='underline'></div>
              <p>
                We'll reach back to you shortly with payment details.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal-container">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center" id="form-modal">
              <Link to="/workshops">
                <img id="close-modal-icon" onClick={handleClick} src={closeWindowIcon} alt="Close" />
              </Link>
              <div id="form-container">
                <h2>{title}</h2>
                <p>{date}</p>
                <div id='underline'></div>
                <p>{priceLabel1}{price1}<br />{priceLabel2}{price2}<br />
                  {priceLabel3}{price3}<br />{priceLabel4}{price4}<br />
                </p>
                <SignupForm
                  setFeedback={setFeedback}
                  subjectContent={`Sign up - ${title} ${date}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default () => {
  const {
    modalItem,
    isModalOpen,
    closeModal
  } = useContext(Context)

  return <Modal
    modalItem={modalItem}
    // date={date}
    // title={title}
    isModalOpen={isModalOpen}
    closeModal={closeModal}
  />
}
