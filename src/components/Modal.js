import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import SignUpForm from "./SignUpForm";

export default function Modal() {
    const { modalItem, isModalOpen, closeModal } = useContext(Consumer)
    const { date, title } = modalItem

    if (!isModalOpen) {
        return null;
    } else {
        return (
            <ModalContainer>
                <div className="container">
                    <div className="row">
                        <div
                            className="mx-auto p-5 text-center"
                            id="modal"
                        >
                            <h2>{title}</h2>
                            <h4>{date}</h4>
                            <p className='my-4'>Enter your data to sign up.<br />You will receive payment details via email.</p>
                            <SignUpForm
                                subjectContent={`Sign up - ${title} ${date}`}
                            />
                            <Link to="/workshops">
                                <i className="fas fa-times fa-2x" onClick={closeModal}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </ModalContainer>
        );
    }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  color: #C7C7C7;
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: #202020;
  }
`;
