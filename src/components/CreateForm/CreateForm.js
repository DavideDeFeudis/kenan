import React, { useContext } from "react";
import Input from "../Input/Input";
import loadingGif from "../../images/load.gif";
import { Button } from "../Button";
import { StateContext, DispatchContext } from "../../context";
import { CREATE_REQUEST, CREATE_SUCCESS, CREATE_ERROR } from "../../ActionTypes";
import { setPreview, createRequest, createSuccess, createError } from "../../ActionCreators";
import "./CreateForm.scss";

const baseUrl = process.env.REACT_APP_BACKEND_HOST;

export default function CreateForm() {
    const { workshopDraft, createStatus } = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const clearInputs = () => {
        dispatch(setPreview({}));
    };

    const handleChange = (e) => {
        dispatch(
            setPreview({
                ...workshopDraft,
                [e.target.name]: e.target.value,
            })
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearInputs();
        dispatch(createRequest());
        try {
            const res = await fetch(`${baseUrl}/admin/workshop`, {
                method: "POST",
                body: JSON.stringify(workshopDraft),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await res.json();
            dispatch(createSuccess(json));
        } catch (e) {
            console.log(e);
            dispatch(createError());
        }
    };

    return (
        <form className="form create-form pt-3" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col-sm-6 col-lg">
                    <label htmlFor="title">Title*</label>
                    <Input id="title" name="title" onChange={handleChange} workshopDraft={workshopDraft} required />
                    <label htmlFor="address">Address*</label>
                    <Input id="address" name="address" onChange={handleChange} workshopDraft={workshopDraft} required />
                    <label htmlFor="info">Info</label>
                    <Input id="info" name="info" onChange={handleChange} workshopDraft={workshopDraft} />
                </div>
                <div className="col-sm-6 col-lg">
                    <label htmlFor="start-date">Start date*</label>
                    <Input id="start-date" type="date" name="startDate" onChange={handleChange} workshopDraft={workshopDraft} required />
                    <label htmlFor="end-date">End date*</label>
                    <Input id="end-date" type="date" name="endDate" onChange={handleChange} workshopDraft={workshopDraft} required />
                    <label htmlFor="start-time">Start time</label>
                    <Input id="start-time" type="time" name="startTime" onChange={handleChange} workshopDraft={workshopDraft} />
                    <label htmlFor="end-time">End time</label>
                    <Input id="end-time" type="time" name="endTime" onChange={handleChange} workshopDraft={workshopDraft} />
                </div>
                <div className="col-sm-6 col-lg">
                    <label htmlFor="priceLabel1">Price label 1*</label>
                    <Input id="priceLabel1" name="priceLabel1" onChange={handleChange} workshopDraft={workshopDraft} required />
                    <label htmlFor="priceLabel2">Price label 2</label>
                    <Input id="priceLabel2" name="priceLabel2" onChange={handleChange} workshopDraft={workshopDraft} />
                    <label htmlFor="priceLabel3">Price label 3</label>
                    <Input id="priceLabel3" name="priceLabel3" onChange={handleChange} workshopDraft={workshopDraft} />
                    <label htmlFor="priceLabel4">Price label 4</label>
                    <Input id="priceLabel4" name="priceLabel4" onChange={handleChange} workshopDraft={workshopDraft} />
                </div>
                <div className="col-sm-6 col-lg">
                    <label htmlFor="price1">Price 1*</label>
                    <Input id="price1" name="price1" type="number" onChange={handleChange} workshopDraft={workshopDraft} required />
                    <label htmlFor="price2">Price 2</label>
                    <Input id="price2" name="price2" type="number" onChange={handleChange} workshopDraft={workshopDraft} />
                    <label htmlFor="price3">Price 3</label>
                    <Input id="price3" name="price3" type="number" onChange={handleChange} workshopDraft={workshopDraft} />
                    <label htmlFor="price4">Price 4</label>
                    <Input id="price4" name="price4" type="number" onChange={handleChange} workshopDraft={workshopDraft} />
                </div>
            </div>
            <div className="mt-4">
                <Button className="admin-button" type="submit">
                    Publish
                </Button>
                <Button onClick={clearInputs} className="admin-button" type="button">
                    Clear Inputs
                </Button>
            </div>

            {createStatus === CREATE_REQUEST && (
                <div className="my-20 mx-auto container text-center">
                    <img src={loadingGif} width="40" height="40" alt="In progress..." />
                    <p className="mt-4">In progress...</p>
                </div>
            )}

            {createStatus === CREATE_SUCCESS && <p className="mb-4 text-success">Published successfully</p>}

            {createStatus === CREATE_ERROR && <p className="mb-4 text-danger">Couldn't publish workshop</p>}
        </form>
    );
}
