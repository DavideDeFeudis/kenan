import { onlineCourse } from "../../data";
import {
  OPEN_MODAL_WORKSHOP,
  OPEN_MODAL_ONLINE_COURSE,
  CLOSE_MODAL,
} from "../../ActionTypes";

const initialState = {
  modalItem: {},
  isModalOpen: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL_WORKSHOP:
      return {
        ...state,
        modalItem: payload,
        isModalOpen: true,
      };
    case OPEN_MODAL_ONLINE_COURSE:
      return {
        ...state,
        modalItem: onlineCourse,
        isModalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalItem: {},
        isModalOpen: false,
      };
    default:
      console.error(`modalReducer - Unhandled action type: ${type}`);
      return state;
  }
};

export default reducer;
