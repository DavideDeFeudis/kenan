import React from "react";
import { Button } from "./Button";
import Input from "./form/Input";
import { createWorkshop } from "../databaseService";

export default function CreateForm(props) {
  const {
    newWorkshop,
    setNewWorkshop,
    addWorkshopToTempWS,
    clearInputs
  } = props;
  const handleChange = e => {
    setNewWorkshop({
      ...newWorkshop,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    addWorkshopToTempWS();
    createWorkshop(newWorkshop);
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
    </form>
  );
}
