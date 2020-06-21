import React, { useState, useContext, useEffect } from "react";
import "../styles/index.scss";
import Navbar from "./Navbar";
import Workshop from "./Workshop";
import CreateForm from "./CreateForm";
import uuidv1 from "uuid/v1";
import { StateContext, DispatchContext } from "../Context";
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  GET_WORKSHOP,
  DELETE_WORKSHOP,
} from "../ActionTypes";

const baseUrl = process.env.REACT_APP_BACKEND_HOST;

export default function Admin() {
  useEffect(() => {
    (async () => {
      try {
        const req = await fetch(baseUrl + "/workshops", {
          headers: { "Content-Type": "application/json" },
        });
        const data = await req.json();
        dispatch({ type: GET_WORKSHOP, payload: data });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const { workshops, newWorkshop } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  // let [tempWorkshops, setTempWorkshops] = useState([]);

  // useEffect(() => {
  //   setTempWorkshops([...workshops]);
  // }, [workshops]);

  // set preview
  const initialState = {
    secondaryID: uuidv1(),
    title: "",
    address: "",
    info: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    priceLabel1: "",
    priceLabel2: "",
    priceLabel3: "",
    priceLabel4: "",
    price1: "",
    price2: "",
    price3: "",
    price4: "",
  };

  // const [newWorkshop, setNewWorkshop] = useState(initialState);

  // const addWorkshopToTempWS = () => {
  //   setTempWorkshops([...tempWorkshops, newWorkshop]);
  //   setNewWorkshop(initialState); // clear preview and inputs
  // };

  // const handleDelete = (secondaryID) => {
  //   setTempWorkshops(
  //     tempWorkshops.filter((item) => item.secondaryID !== secondaryID)
  //   );
  //   deleteWorkshop(secondaryID);
  // };

  // const duplicate = (workshop) => {
  //   setNewWorkshop({
  //     ...workshop,
  //     customers: [],
  //     secondaryID: uuidv1(),
  //   });
  // };

  // const clearInputs = () => {
  //   setNewWorkshop(initialState);
  // };

  // console.log('workshops:', workshops)
  
  return (
    <div className="Admin">
      <Navbar admin />
      <div className="main container-fluid text-center">
        <section id="create-section">
          <CreateForm
            newWorkshop={newWorkshop}
            // setNewWorkshop={setNewWorkshop}
            // addWorkshopToTempWS={addWorkshopToTempWS}
            // clearInputs={clearInputs}
          />
        </section>

        <section id="preview">
          <h2>Preview</h2>
          <Workshop preview workshop={newWorkshop} />
        </section>

        <section className="published">
          <h2>Published</h2>
          {workshops
            .sort((a, b) => {
              const aDate = parseInt(a.startDate.split("-").join(""));
              const bDate = parseInt(b.startDate.split("-").join(""));
              return aDate - bDate;
            })
            .map((workshop) => {
              return (
                <Workshop
                  admin
                  key={workshop.secondaryID}
                  workshop={workshop}
                />
              );
            })}
        </section>
      </div>
    </div>
  );
}
