import React, { useContext, useEffect } from "react";
import WorkshopsList from "./WorkshopsList";
import { StateContext, DispatchContext } from "../context";
import { getRequest, getSuccess, getError } from "../ActionCreators";
const baseUrl = process.env.REACT_APP_BACKEND_HOST;

export default function WorkshopsListContainer({ admin, user }) {
  const { workshops, getStatus } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    (async () => {
      dispatch(getRequest());
      try {
        // throw new Error();

        const req = await fetch(baseUrl + "/workshops", {
          headers: { "Content-Type": "application/json" },
        });
        const data = await req.json();
        dispatch(getSuccess(data));
      } catch (e) {
        console.log(e);
        dispatch(getError());
      }
    })();
  }, []);

  return (
    <WorkshopsList
      admin={admin}
      user={user}
      workshops={workshops}
      getStatus={getStatus}
    ></WorkshopsList>
  );
}
