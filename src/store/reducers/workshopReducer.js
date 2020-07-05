import { videos, onlineCourse } from "../../data";
import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_ERROR,
  SET_PREVIEW,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_ERROR,
  DELETE_SUCCESS,
} from "../../ActionTypes";

const initialState = {
  workshopDraft: {},
  workshops: [],
  onlineCourse,
  videos,
  getStatus: "",
  createStatus: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_REQUEST:
      return {
        ...initialState,
        getStatus: GET_REQUEST,
      };
    case GET_SUCCESS:
      return {
        ...initialState,
        getStatus: GET_SUCCESS,
        workshops: payload,
      };
    case GET_ERROR:
      return {
        ...initialState,
        getStatus: GET_ERROR,
      };
    case SET_PREVIEW:
      return {
        ...state,
        createStatus: "",
        workshopDraft: payload,
      };
    case CREATE_REQUEST:
      return {
        ...state,
        createStatus: CREATE_REQUEST,
      };
    case CREATE_SUCCESS:
      // let i = 0;
      // while (i < 300000000) i++;
      return {
        ...state,
        createStatus: CREATE_SUCCESS,
        workshops: [...state.workshops, payload],
      };
    case CREATE_ERROR:
      return {
        ...state,
        createStatus: CREATE_ERROR,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        workshops: state.workshops.filter((item) => item._id !== payload),
      };
    default:
      console.error(`workshopReducer - Unhandled action type: ${type}`);
      return state;
  }
};

export default reducer;
