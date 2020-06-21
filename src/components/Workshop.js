import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { formatDate } from "../utils";
import { StateContext } from "../Context";
import { DispatchContext } from "../Context";
import * as types from "../ActionTypes";
import uuidv1 from "uuid/v1";

export default function Workshop(props) {
  // const {workshops} = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const { admin, preview, user, workshop } = props;
  // console.log('workshop:', workshop)

  const baseUrl = process.env.REACT_APP_BACKEND_HOST;

  const deleteWorkshop = (secondaryID) => {
    // dispatch request
    return fetch(`${baseUrl}/admin/workshop/${secondaryID}`, {
      method: "delete",
    })
      .then((response) => {
        response.json();
      })
      .then((json) => {
        console.log("workshop deleted - json:", json);
        dispatch({ type: types.DELETE_WORKSHOP, payload: secondaryID });
      })
      .catch((err) => {
        console.log(err);
        // dispatch delete failure
      });
  };

  const {
    secondaryID,
    _id,
    title,
    address,
    info,
    startDate,
    startTime,
    endDate,
    endTime,
    priceLabel1,
    priceLabel2,
    priceLabel3,
    priceLabel4,
    price1,
    price2,
    price3,
    price4,
    customers,
  } = workshop;

  // generate priceArea with truthy values
  const priceLabels = [
    priceLabel1,
    priceLabel2,
    priceLabel3,
    priceLabel4,
  ].filter(Boolean);
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

  const userButtons = (
    <Link to="/workshops">
      <Button
        type="button"
        className="mt-4"
        onClick={() =>
          dispatch({
            type: types.OPEN_MODAL,
            payload: secondaryID,
          })
        }
      >
        Info
      </Button>
    </Link>
  );

  // const duplicate = (workshop) => {
  //   setNewWorkshop({
  //     ...workshop,
  //     customers: [],
  //     secondaryID: uuidv1(),
  //   });
  // };

  const adminButtons = (
    <div className="my-4">
      <Link to="/admin">
        <AnchorLink href="#create-section">
          <Button
            type="button"
            className="admin-button"
            onClick={() => {
              dispatch({
                type: types.SET_NEW_WORKSHOP,
                payload: {
                  ...workshop,
                  _id: undefined,
                  secondaryID: uuidv1(),
                  customers: [],
                },
              });
            }}
          >
            Duplicate
          </Button>
        </AnchorLink>
      </Link>
      <Link to="/admin">
        <Button
          type="button"
          className="admin-button"
          onClick={() => deleteWorkshop(secondaryID)}
        >
          Delete
        </Button>
      </Link>
    </div>
  );

  let buttons = null; // for preview
  if (admin) {
    buttons = adminButtons;
  } else if (user) {
    buttons = userButtons;
  }
  let customersList = null;

  if (customers && customers.length) {
    // customers is undefined on first render
    customersList = (
      <div className="mt-3">
        <p>Attendees:</p>
        {customers.map((customer) => {
          return (
            <p key={customer._id}>
              {customer.firstName} {customer.lastName} - {customer.email}
            </p>
          );
        })}
      </div>
    );
  } else {
    customersList = <p className="mt-3">No one signed up yet</p>;
  }

  let date = "";
  if (startDate && endDate) date = formatDate(startDate, endDate);

  let time = "";
  if (startTime && endTime) time = startTime + "-" + endTime;

  return (
    <div className="Workshop py-5">
      <h3>{title}</h3>
      <p>
        {date} {time}
        <br />
        {address}
        <br />
        {info}
      </p>
      {(preview || admin) && <div id="price-area">{priceArea}</div>}
      {admin && customersList}
      {buttons}
    </div>
  );
}
