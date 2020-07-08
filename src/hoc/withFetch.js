import React, { useContext, useEffect } from "react";
import { DispatchContext } from "../context";
import { getRequest, getSuccess, getError } from "../ActionCreators";
const baseUrl = process.env.REACT_APP_BACKEND_HOST;

export default (WrappedComponent) => {
  return (props) => {
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

    return <WrappedComponent {...props} />;
  };
};
