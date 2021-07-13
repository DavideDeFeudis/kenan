import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { formatDate } from "../../utils";
import { DispatchContext } from "../../context";
import { setPreview, deleteSuccess, openModalWorkshop } from "../../ActionCreators";
import "./Workshop.scss";

/**
 * Displays a workshop instance with title, info and buttons.
 */
export default function Workshop({ admin, preview, user, workshop }) {
    const dispatch = useContext(DispatchContext);
    const baseUrl = process.env.REACT_APP_BACKEND_HOST;

    const deleteWorkshop = async (_id) => {
        try {
            await fetch(`${baseUrl}/admin/workshop/${_id}`, {
                method: "delete",
            });
            dispatch(deleteSuccess(_id));
        } catch (err) {
            console.log(err);
        }
    };

    const {
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
    const priceLabels = [priceLabel1, priceLabel2, priceLabel3, priceLabel4].filter(Boolean);
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
            <Button type="button" data-test="user-button" className="mt-4" onClick={() => dispatch(openModalWorkshop(_id))}>
                Info
            </Button>
        </Link>
    );

    const adminButtons = (
        <div className="mt-4">
            <Link to="/admin">
                <Button
                    type="button"
                    data-test="admin-button"
                    className="admin-button"
                    onClick={() => {
                        dispatch(
                            setPreview({
                                ...workshop,
                                _id: undefined,
                                customers: [],
                            })
                        );
                    }}
                >
                    Duplicate
                </Button>
            </Link>
            <Link to="/admin">
                <Button type="button" data-test="admin-button" className="admin-button" onClick={() => deleteWorkshop(_id)}>
                    Delete
                </Button>
            </Link>
        </div>
    );

    let buttons = null;
    if (admin) {
        buttons = adminButtons;
    } else if (user) {
        buttons = userButtons;
    }

    let customersList = <p className="my-4">No one signed up yet</p>;
    if (customers && customers.length) {
        customersList = (
            <div className="mt-4">
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
    }

    let date = "";
    if (startDate && endDate) {
        date = formatDate(startDate, endDate);
    }

    let time = "";
    if (startTime && endTime) {
        time = startTime + "-" + endTime;
    }

    return (
        <div className="workshop-container py-12">
            <h3 className="mb-4">{title}</h3>
            <p className="mb-4">
                {date} {time}
                <br />
                {address}
                <br />
                {info}
            </p>
            {(preview || admin) && <div className="mb-4">{priceArea}</div>}
            {admin && customersList}
            {buttons}
        </div>
    );
}
