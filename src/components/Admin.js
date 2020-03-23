import React, { useState, useContext, useEffect } from "react";
import "../styles/index.scss";
import { Context } from "../context";
import Navbar from "./Navbar";
import Workshop from "./Workshop";
import CreateForm from "./CreateForm";
import { deleteWorkshop } from "../databaseService";
import uuidv1 from "uuid/v1";

export default function Admin() {
  const { workshops } = useContext(Context);
  let [tempWorkshops, setTempWorkshops] = useState([]);
  useEffect(() => {
    setTempWorkshops([...workshops]);
  }, [workshops]);
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
    price4: ""
  };
  const [newWorkshop, setNewWorkshop] = useState(initialState);
  const addWorkshopToTempWS = () => {
    setTempWorkshops([...tempWorkshops, newWorkshop]);
    setNewWorkshop(initialState); // clear preview and inputs
  };
  const handleDelete = secondaryID => {
    setTempWorkshops(
      tempWorkshops.filter(item => item.secondaryID !== secondaryID)
    );
    deleteWorkshop(secondaryID);
  };
  const duplicate = workshop => {
    setNewWorkshop({
      ...workshop,
      secondaryID: uuidv1()
    });
  };
  const clearInputs = () => {
    setNewWorkshop(initialState);
  };
  return (
    <div className="Admin">
      <Navbar admin />
      <div className="main container-fluid text-center">
        <section id="create-section">
          <CreateForm
            newWorkshop={newWorkshop}
            setNewWorkshop={setNewWorkshop}
            addWorkshopToTempWS={addWorkshopToTempWS}
            clearInputs={clearInputs}
          />
        </section>
        <section id="preview">
          <h2>Preview</h2>
          <Workshop preview workshop={newWorkshop} />
        </section>
        <section className="published">
          <h2>Published</h2>
          {tempWorkshops
            .sort((a, b) => {
              const aDate = parseInt(a.startDate.split("-").join(""));
              const bDate = parseInt(b.startDate.split("-").join(""));
              return aDate - bDate;
            })
            .map(workshop => {
              return (
                <Workshop
                  admin
                  key={workshop.secondaryID}
                  workshop={workshop}
                  handleDelete={handleDelete}
                  duplicate={duplicate}
                />
              );
            })}
        </section>
      </div>
    </div>
  );
}
