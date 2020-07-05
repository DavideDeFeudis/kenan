import React, { useEffect } from "react";
import Workshop from "./Workshop";
import loadingGif from "../images/load.gif";
import { connect } from "react-redux";
import { GET_REQUEST, GET_SUCCESS, GET_ERROR } from "../ActionTypes";
import { getRequest, getSuccess, getError } from "../ActionCreators";

const baseUrl = process.env.REACT_APP_BACKEND_HOST;

function WorkshopsList(props) {
  const { admin, user, workshops, getStatus, dispatch } = props;

  useEffect(() => {
    (async () => {
      dispatch.getRequest();
      try {
        // throw new Error();

        const req = await fetch(baseUrl + "/workshops", {
          headers: { "Content-Type": "application/json" },
        });
        const data = await req.json();
        dispatch.getSuccess(data);
      } catch (e) {
        console.log(e);
        dispatch.getError();
      }
    })();
  }, []);

  let content;
  if (getStatus === GET_REQUEST) {
    content = (
      <div className="loading-spinner container text-center">
        <img src={loadingGif} width="40" height="40" alt="loading..." />
        <p className="mt-3">Loading workshops...</p>
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
        return (
          <Workshop
            admin={admin}
            user={user}
            key={workshop._id}
            workshop={workshop}
          />
        );
      });
  } else if (getStatus === GET_SUCCESS && workshops.length === 0) {
    content = <p className="my-5">There are no workshops at the moment</p>;
  } else if (getStatus === GET_ERROR) {
    content = <p className="my-5">There was a problem loading workshops</p>;
  }

  return <div className="container text-center">{content}</div>;
}

const mapStateToProps = (state) => ({
  workshops: state.workshopReducer.workshops,
  getStatus: state.workshopReducer.getStatus,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: {
    getRequest: () => dispatch(getRequest()),
    getSuccess: (payload) => dispatch(getSuccess(payload)),
    getError: () => dispatch(getError()),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopsList);
