import React, { useReducer } from "react";
import {
    GET_REQUEST,
    GET_SUCCESS,
    GET_ERROR,
    SET_PREVIEW,
    CREATE_REQUEST,
    CREATE_SUCCESS,
    CREATE_ERROR,
    DELETE_SUCCESS,
    OPEN_MODAL_WORKSHOP,
    CLOSE_MODAL,
} from "./ActionTypes";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

export const initialState = {
    workshopDraft: {},
    workshops: [],
    modalItem: {},
    isModalOpen: false,
    getStatus: "",
    createStatus: "",
};

export const reducer = (state = initialState, { type, payload }) => {
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
        case OPEN_MODAL_WORKSHOP:
            return {
                ...state,
                modalItem: state.workshops.find((workshop) => workshop._id === payload),
                isModalOpen: true,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modalItem: {},
                isModalOpen: false,
            };
        default:
            console.error(`Unhandled action type: ${type}`);
            return initialState;
    }
};

export default ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </StateContext.Provider>
    );
};
