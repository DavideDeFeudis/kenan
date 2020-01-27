import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import { ButtonContainer } from "./Button";

export default function Modal() {
    const { isModalOpen, closeModal } = useContext(Consumer)

    if (!isModalOpen) {
        return null;
    } else {
        return (
            <ModalContainer>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center"
                            id="modal"
                        >
                            <h5>Confirm sign up for</h5>
                            <input type="text" />
                            <ButtonContainer
                                onClick={() => {
                                    // closeModal();
                                }}
                            >
                                Sign up
                            </ButtonContainer>
                            <Link to="/workshops">
                                <ButtonContainer
                                    onClick={() => {
                                        closeModal();
                                    }}
                                >
                                    Cancel
                            </ButtonContainer>
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
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: #FFF;
  }
`;
