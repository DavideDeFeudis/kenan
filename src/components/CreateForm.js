import React, { useContext, useState, useEffect } from "react";
import { Button } from "./Button";
import Input from "./form/Input";
// import { createWorkshop } from "../databaseService";
import { StateContext, DispatchContext } from "../context";
import * as types from "../ActionTypes";
import loadingGif from "../images/load.gif";
// import uuidv1 from "uuid/v1";

const baseUrl = process.env.REACT_APP_BACKEND_HOST;

const DEFAULT = "DEFAULT";
const LOADING = "LOADING";
const SUCCESS = "SUCCESS";
const FAIL = "FAIL";

export default function CreateForm() {
  const [createStatus, setCreateStatus] = useState(DEFAULT);
  const { newWorkshop } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  // removes success/fail message when starting to create next workshop (onChange or by duplicating)
  useEffect(() => {
    setCreateStatus(newWorkshop !== {} && DEFAULT);
  }, [newWorkshop]);

  const clearInputs = () => {
    dispatch({
      type: types.SET_NEW_WORKSHOP,
      payload: {},
    });
  };

  const handleChange = (e) => {
    dispatch({
      type: types.SET_NEW_WORKSHOP,
      payload: {
        ...newWorkshop,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearInputs();
    setCreateStatus(LOADING);
    try {
      // throw new Error();

      const res = await fetch(`${baseUrl}/admin/workshop`, {
        method: "POST",
        body: JSON.stringify(newWorkshop),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      dispatch({ type: types.CREATE_WORKSHOP, payload: json });
      setCreateStatus(SUCCESS);
    } catch (e) {
      console.log(e);
      dispatch({ type: types.REQUEST_FAIL });
      setCreateStatus(FAIL);
    }
  };

  return (
    <form className="form create-form pt-3" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-sm-6 col-lg">
          <label htmlFor="title">Title*</label>
          <Input
            id="title"
            name="title"
            onChange={handleChange}
            newWorkshop={newWorkshop}
            required
          />
          <label htmlFor="address">Address*</label>
          <Input
            id="address"
            name="address"
            onChange={handleChange}
            newWorkshop={newWorkshop}
            required
          />
          <label htmlFor="info">Info</label>
          <Input
            id="info"
            name="info"
            onChange={handleChange}
            newWorkshop={newWorkshop}
          />
        </div>
        <div className="col-sm-6 col-lg">
          <label htmlFor="start-date">Start date*</label>
          <Input
            id="start-date"
            type="date"
            name="startDate"
            onChange={handleChange}
            newWorkshop={newWorkshop}
            required
          />
          <label htmlFor="end-date">End date*</label>
          <Input
            id="end-date"
            type="date"
            name="endDate"
            onChange={handleChange}
            newWorkshop={newWorkshop}
            required
          />
          <label htmlFor="start-time">Start time</label>
          <Input
            id="start-time"
            type="time"
            name="startTime"
            onChange={handleChange}
            newWorkshop={newWorkshop}
          />
          <label htmlFor="end-time">End time</label>
          <Input
            id="end-time"
            type="time"
            name="endTime"
            onChange={handleChange}
            newWorkshop={newWorkshop}
          />
        </div>
        <div className="col-sm-6 col-lg">
          <label htmlFor="priceLabel1">Price label 1*</label>
          <Input
            id="priceLabel1"
            name="priceLabel1"
            onChange={handleChange}
            newWorkshop={newWorkshop}
            required
          />
          <label htmlFor="priceLabel2">Price label 2</label>
          <Input
            id="priceLabel2"
            name="priceLabel2"
            onChange={handleChange}
            newWorkshop={newWorkshop}
          />
          <label htmlFor="priceLabel3">Price label 3</label>
          <Input
            id="priceLabel3"
            name="priceLabel3"
            onChange={handleChange}
            newWorkshop={newWorkshop}
          />
          <label htmlFor="priceLabel4">Price label 4</label>
          <Input
            id="priceLabel4"
            name="priceLabel4"
            onChange={handleChange}
            newWorkshop={newWorkshop}
          />
        </div>
        <div className="col-sm-6 col-lg">
          <label htmlFor="price1">Price 1*</label>
          <Input
            id="price1"
            name="price1"
            type="number"
            onChange={handleChange}
            newWorkshop={newWorkshop}
            required
          />
          <label htmlFor="price2">Price 2</label>
          <Input
            id="price2"
            name="price2"
            type="number"
            onChange={handleChange}
            newWorkshop={newWorkshop}
          />
          <label htmlFor="price3">Price 3</label>
          <Input
            id="price3"
            name="price3"
            type="number"
            onChange={handleChange}
            newWorkshop={newWorkshop}
          />
          <label htmlFor="price4">Price 4</label>
          <Input
            id="price4"
            name="price4"
            type="number"
            onChange={handleChange}
            newWorkshop={newWorkshop}
          />
        </div>
      </div>
      <div className="my-4">
        <Button className="admin-button" type="submit">
          Publish
        </Button>
        <Button onClick={clearInputs} className="admin-button" type="button">
          Clear Inputs
        </Button>
      </div>

      {createStatus === LOADING && (
        <div className="loading-spinner container text-center">
          <img src={loadingGif} width="40" height="40" alt="In progress..." />
          <p className="mt-3">In progress...</p>
        </div>
      )}

      {createStatus === SUCCESS && (
        <p className="mb-3 text-success">Published successfully</p>
      )}

      {createStatus === FAIL && (
        <p className="mb-3 text-danger">Couldn't publish workshop</p>
      )}
    </form>
  );
}
