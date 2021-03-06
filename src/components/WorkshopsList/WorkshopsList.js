import React, { useContext, useEffect } from "react";
import "./WorkshopsList.scss";
import Workshop from "../Workshop/Workshop";
import loadingGif from "../../images/load.gif";
import { StateContext, DispatchContext } from "../../context";
import { GET_REQUEST, GET_SUCCESS, GET_ERROR } from "../../ActionTypes";
import { getRequest, getSuccess, getError } from "../../ActionCreators";
// Use local data
// import { localWorkshops } from "../../data.js";

const baseUrl = process.env.REACT_APP_BACKEND_HOST;

/**
 * Fetches and displays a list of workshops sorted by starting date. Displays an alternate text in case of error or missing workshops.
 */
export default function WorkshopsList({ admin, user }) {
    const { workshops, getStatus } = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    useEffect(() => {
        (async () => {
            dispatch(getRequest());
            try {
                // Load data from database
                const req = await fetch(baseUrl + "/workshops", {
                    headers: { "Content-Type": "application/json" },
                });
                const data = await req.json();

                // Use local data
                // const data = localWorkshops;
                dispatch(getSuccess(data));
            } catch (e) {
                console.warn(`Could not load workshops: ${e}`);
                dispatch(getError());
            }
        })();
    }, [dispatch]);

    let content;
    if (getStatus === GET_REQUEST) {
        content = (
            <div className="my-20 mx-auto container text-center">
                <img src={loadingGif} width="40" height="40" alt="loading..." />
                <p className="mt-4">Loading workshops...</p>
            </div>
        );
    } else if (getStatus === GET_SUCCESS && workshops.length > 0) {
        content = workshops
            .sort((a, b) => {
                const aDate = parseInt(a.startDate.split("-").join(""));
                const bDate = parseInt(b.startDate.split("-").join(""));
                return aDate - bDate;
            })
            .map((workshop) => {
                return <Workshop admin={admin} user={user} key={workshop._id} workshop={workshop} />;
            });
    } else if (getStatus === GET_SUCCESS && workshops.length === 0) {
        content = <p className="my-4">There are no workshops at the moment</p>;
    } else if (getStatus === GET_ERROR) {
        content = <p className="my-4">There was a problem loading workshops</p>;
    }

    return <div className="container w-144 text-center">{content}</div>;
}
