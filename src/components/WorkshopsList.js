import React, { useContext, useEffect } from "react";
import Workshop from "./Workshop";
import loadingGif from "../images/load.gif";
import { StateContext, DispatchContext } from "../Context";
import { GET_WORKSHOPS } from "../ActionTypes";
const baseUrl = process.env.REACT_APP_BACKEND_HOST;

export default function WorkshopsList() {
  const { workshops, loading } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    (async () => {
      try {
        const req = await fetch(baseUrl + "/workshops", {
          headers: { "Content-Type": "application/json" },
        });
        const data = await req.json();
        dispatch({ type: GET_WORKSHOPS, payload: data });
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
        return <Workshop user key={workshop._id} workshop={workshop} />;
      });

  if (!loading && workshops && workshops.length > 0) {
    content = workshopComponents;
  } else if (!loading && !workshops) {
    content = <p className="my-5">There was a problem loading workshops</p>;
  } else if (!loading && workshops.length === 0) {
    content = <p className="my-5">There are no workshops at the moment</p>;
  }

  return <div className="container text-center">{content}</div>;
}
