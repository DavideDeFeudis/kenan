import React, { useContext, useState } from "react";
import '../styles/index.scss';
import { Link } from "react-router-dom";
import { Context } from "../context";
import closeWindowIcon from "../images/close-window.png";
import CreateForm from "./CreateForm";

export function UpdateWorkshopModal(props) {
  const { modalItem, isModalOpen, closeModal } = props // add props at bottom page
  // console.log('formData:', formData)
  console.log('modalItem:', modalItem)
  // const [modalMessage, setModalMessage] = useState('')
  // const [signupSuccess, setSignupSuccess] = useState(false)
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
    price4
  } = modalItem

  // const setFeedback = (feedback) => {
  //   setSignupSuccess(feedback.success)
  //   setModalMessage(feedback.success ? 'You signed up successfully!' : 'Error signing up. Try again later.')
  //   // Warning: Can't perform a React state update on an unmounted component.
  // }

  const handleClickCloseModal = () => {
    // setSignupSuccess(false)
    // setModalMessage('')
    closeModal()
  }

  // generate priceArea with truthy values
  // const priceLabelArray = [
  //   priceLabel1,
  //   priceLabel2,
  //   priceLabel3,
  //   priceLabel4
  // ]
  // const priceArray = [
  //   price1,
  //   price2,
  //   price3,
  //   price4
  // ]
  // const truthyPriceLabelArray = priceLabelArray.filter(Boolean)
  // const truthyPriceArray = priceArray.filter(Boolean)
  // const priceArea = truthyPriceLabelArray.map((label, i) => {
  //   return <span key={i}>{label}{truthyPriceArray[i]}<br /></span>
  // })

  if (!isModalOpen) {
    return null;
  } else {
    return (
      <div className="modal-container">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center" id="form-modal">
              <Link to="/admin">
                <img id="close-modal-icon" onClick={handleClickCloseModal} src={closeWindowIcon} alt="Close" />
              </Link>
              <div id="form-container">
                {/* <h2>{title}</h2>
                <span>{date}</span> */}
                {/* <CreateForm
                  formData={modalItem}
                  setFormData={setFormData}
                  addWorkshopToTempWS={addWorkshopToTempWS}
                  secondaryID={secondaryID}
                /> */}
                {/* <div id='line'></div>
                <div id='price-area'>
                  {
                    priceArea
                  }
                </div>
                <SignupForm
                  workshopId={_id}
                  setFeedback={setFeedback}
                  subjectContent={`Sign up - ${title} ${date}`}
                /> */}
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

  return <UpdateWorkshopModal
    modalItem={modalItem}
    isModalOpen={isModalOpen}
    closeModal={closeModal}
    // , formData, setFormData, addWorkshopToTempWS
  />
}
