import React, { useContext, useState } from "react";
import "../../styles/index.scss";
import "./Modal.scss";
import { Link } from "react-router-dom";
import SignupForm from "../SignupForm/SignupForm";
import closeWindowIcon from "../../images/close-window.png";
import { StateContext, DispatchContext } from "../../context";
import { closeModal } from "../../ActionCreators";

export default function Modal({ parentPage }) {
    const { isModalOpen, modalItem } = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const [modalMessage, setModalMessage] = useState("");
    const [signupSuccess, setSignupSuccess] = useState(false);
    const { _id, title, date, priceLabel1, priceLabel2, priceLabel3, priceLabel4, price1, price2, price3, price4 } = modalItem;

    const setFeedback = (feedback) => {
        setSignupSuccess(feedback.success);
        setModalMessage(feedback.success ? "You signed up successfully!" : "Error signing up. Try again later.");
    };

    const handleClickCloseModal = () => {
        setSignupSuccess(false);
        setModalMessage("");
        dispatch(closeModal());
    };

    // generate priceArea with truthy values
    const priceLabels = [priceLabel1, priceLabel2, priceLabel3, priceLabel4].filter(Boolean);
    const prices = [price1, price2, price3, price4].filter(Boolean);
    const priceArea = priceLabels.map((label, i) => {
        return (
            <span key={i}>
                {label}
                {prices[i]}
                <br />
            </span>
        );
    });

    if (!isModalOpen) {
        return null;
    } else if (modalMessage) {
        return (
            <div className="backdrop flex-center">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto p-5 text-center" id="feedback-modal">
                            <Link to={parentPage}>
                                <img id="close-modal-icon" onClick={handleClickCloseModal} src={closeWindowIcon} alt="Close" />
                            </Link>
                            <h2>{modalMessage}</h2>
                            {signupSuccess && (
                                <div>
                                    <hr />
                                    <span>We'll reach back to you shortly with payment details.</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="backdrop flex-center">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto text-center" id="form-modal">
                            <Link to={parentPage}>
                                <img id="close-modal-icon" onClick={handleClickCloseModal} src={closeWindowIcon} alt="Close" />
                            </Link>
                            <div id="form-container">
                                <h2>{title}</h2>
                                <span>{date}</span>
                                <div id="line"></div>
                                <div className="mb-4">{priceArea}</div>
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
