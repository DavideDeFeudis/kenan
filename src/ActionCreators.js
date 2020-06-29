import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_ERROR,
  SET_PREVIEW,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_ERROR,
  // DELETE_REQUEST,
  DELETE_SUCCESS,
  // DELETE_ERROR,
  OPEN_MODAL_WORKSHOP,
  OPEN_MODAL_ONLINE_COURSE,
  CLOSE_MODAL,
} from "./ActionTypes";

export const getRequest = () => ({
  type: GET_REQUEST,
});

export const getSuccess = (payload) => ({
  type: GET_SUCCESS,
  payload,
});

export const getError = () => ({
  type: GET_ERROR,
});

export const setPreview = (payload) => ({
  type: SET_PREVIEW,
  payload,
});

export const createRequest = () => ({
  type: CREATE_REQUEST,
});

export const createSuccess = (payload) => ({
  type: CREATE_SUCCESS,
  payload,
});

export const createError = () => ({
  type: CREATE_ERROR,
});
