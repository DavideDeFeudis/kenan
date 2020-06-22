import React, { useReducer } from "react";
import { videos, onlineCourse } from "./data";
import * as types from "./ActionTypes";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

const initialValue = {
  newWorkshop: {},
  workshops: [],
  onlineCourse,
  videos,
  loading: false,
  modalItem: {},
  isModalOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.REQUEST:
      console.log("REQUEST:");
      return {
        ...state,
        loading: true,
      };
    case types.SET_NEW_WORKSHOP:
      console.log("SET_NEW_WORKSHOP:");
      return {
        ...state,
        newWorkshop: action.payload,
      };
    case types.GET_WORKSHOPS:
      console.log("GET_WORKSHOPS:");
      return {
        ...state,
        loading: false,
        workshops: action.payload,
      };
    case types.CREATE_WORKSHOP:
      console.log("CREATE_WORKSHOP:");
      return {
        ...state,
        loading: false,
        workshops: [...state.workshops, action.payload],
      };
    case types.DELETE_WORKSHOP:
      console.log("DELETE_WORKSHOP:");
      return {
        ...state,
        loading: false,
        workshops: state.workshops.filter(
          (item) => item._id !== action.payload
        ),
      };
    case types.OPEN_MODAL_WORKSHOP:
      return {
        ...state,
        modalItem: state.workshops.find(
          (workshop) => workshop._id === action.payload
        ),
        isModalOpen: true,
      };
    case types.OPEN_MODAL_ONLINE_COURSE:
      return {
        ...state,
        modalItem: onlineCourse,
        isModalOpen: true,
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        modalItem: {},
        isModalOpen: false,
      };
    default:
      console.error(`Unhandled action type: ${action.type}`);
      return state;
  }
};

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
