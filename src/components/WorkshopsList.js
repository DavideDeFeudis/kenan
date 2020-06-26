import React, { useContext, useEffect } from "react";
import Workshop from "./Workshop";
import loadingGif from "../images/load.gif";
import { StateContext, DispatchContext } from "../context";
import * as types from "../ActionTypes";
const baseUrl = process.env.REACT_APP_BACKEND_HOST;

const DEFAULT = "DEFAULT";
const LOADING = "LOADING";
const SUCCESS = "SUCCESS";
const FAIL = "FAIL";

export default function WorkshopsList({ admin, user }) {
  const { workshops, status } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    (async () => {
      dispatch({ type: types.REQUEST });
      try {
        const req = await fetch(baseUrl + "/workshops", {
          headers: { "Content-Type": "application/json" },
        });
        const data = await req.json();
        dispatch({ type: types.GET_WORKSHOPS, payload: data });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  let content = (
    <div className="loading-spinner container text-center">
      <img src={loadingGif} width="40" height="40" alt="loading..." />
      <p className="mt-3">Loading workshops...</p>
    </div>
  );

  const workshopComponents =
    workshops &&
    workshops
      .sort((a, b) => {
        const aDate = parseInt(a.startDate.split("-").join(""));
        const bDate = parseInt(b.startDate.split("-").join(""));
        return aDate - bDate;
      })
      .map((workshop) => {
        return <Workshop admin={admin} user={user} key={workshop._id} workshop={workshop} />;
      });

  if (status === SUCCESS && workshops && workshops.length > 0) {
    content = workshopComponents;
  } else if (status === FAIL && !workshops) {
    content = <p className="my-5">There was a problem loading workshops</p>;
  } else if (status === SUCCESS && workshops.length === 0) {
    content = <p className="my-5">There are no workshops at the moment</p>;
  }

  return <div className="container text-center">{content}</div>;
}
