import React, { useContext, useState } from "react";
import "../styles/index.scss";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";
import closeWindowIcon from "../images/close-window.png";
import { StateContext, DispatchContext } from "../context";
import { CLOSE_MODAL } from "../ActionTypes";

export default function Modal({ parentPage }) {
  const { isModalOpen, modalItem } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const [modalMessage, setModalMessage] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const {
    _id,
    title,
    date,
    priceLabel1,
    priceLabel2,
    priceLabel3,
    priceLabel4,
    price1,
    price2,
    price3,
    price4,
  } = modalItem;

  const setFeedback = (feedback) => {
    setSignupSuccess(feedback.success);
    setModalMessage(
      feedback.success
        ? "You signed up successfully!"
        : "Error signing up. Try again later."
    );
    // Warning: Can't perform a React state update on an unmounted component.
  };

  const handleClickCloseModal = () => {
    setSignupSuccess(false);
    setModalMessage("");
    dispatch({ type: CLOSE_MODAL });
  };

  // generate priceArea with truthy values
  const priceLabelArray = [priceLabel1, priceLabel2, priceLabel3, priceLabel4];
  const priceArray = [price1, price2, price3, price4];
  const truthyPriceLabelArray = priceLabelArray.filter(Boolean);
  const truthyPriceArray = priceArray.filter(Boolean);
  const priceArea = truthyPriceLabelArray.map((label, i) => {
    return (
      <span key={i}>
        {label}
        {truthyPriceArray[i]}
        <br />
      </span>
    );
  });

  if (!isModalOpen) {
    return null;
  } else if (modalMessage) {
    return (
      <div className="modal-container">
        <div className="container">
          <div className="row">
            <div className="mx-auto p-5 text-center" id="feedback-modal">
              <Link to={parentPage}>
                <img
                  id="close-modal-icon"
                  onClick={handleClickCloseModal}
                  src={closeWindowIcon}
                  alt="Close"
                />
              </Link>
              <h2>{modalMessage}</h2>
              {signupSuccess && (
                <div>
                  <div id="line"></div>
                  <span>
                    We'll reach back to you shortly with payment details.
                  </span>
                </div>
              )}
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
              <Link to={parentPage}>
                <img
                  id="close-modal-icon"
                  onClick={handleClickCloseModal}
                  src={closeWindowIcon}
                  alt="Close"
                />
              </Link>
              <div id="form-container">
                <h2>{title}</h2>
                <span>{date}</span>
                <div id="line"></div>
                <div id="price-area">{priceArea}</div>
                <SignupForm
                  workshopId={_id}
                  setFeedback={setFeedback}
                  subjectContent={`Sign up - ${title} ${date ? date : ""}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
