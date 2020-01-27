import React from "react";
import styled from "styled-components";
// import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default function Modal() {
    return (
        //   <ProductConsumer>
        //     {value => {
        //       const { modalOpen, closeModal } = value;
        //       const { img, title, price } = value.modalProduct;
        //       if (!modalOpen) {
        //         return null;
        //       } else {
        //         return (
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
                        <ButtonContainer
                            onClick={() => {
                                // closeModal();
                            }}
                        >
                            Cancel
                            </ButtonContainer>
                    </div>
                </div>
            </div>
        </ModalContainer>
        //             );
        //           }
        //         }}
        //       </ProductConsumer>
    );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: #FFF;
  }
`;
