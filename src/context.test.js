import { initialState, reducer } from "./context";
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
import { localWorkshops } from "./data";

describe("reducer", () => {
    let state;
    beforeEach(() => {
        state = {
            ...initialState,
            workshops: [...localWorkshops],
        };
    });

    it("case GET_REQUEST", () => {
        expect(reducer(state, { type: GET_REQUEST })).toEqual({
            ...initialState,
            getStatus: GET_REQUEST,
        });
    });

    it("case GET_SUCCESS", () => {
        expect(reducer(state, { type: GET_SUCCESS, payload: localWorkshops })).toEqual({
            ...initialState,
            getStatus: GET_SUCCESS,
            workshops: localWorkshops,
        });
    });

    it("case GET_ERROR", () => {
        expect(reducer(state, { type: GET_ERROR })).toEqual({
            ...initialState,
            getStatus: GET_ERROR,
        });
    });

    it("case SET_PREVIEW", () => {
        expect(reducer(state, { type: SET_PREVIEW, payload: localWorkshops[0] })).toEqual({
            ...state,
            createStatus: "",
            workshopDraft: localWorkshops[0],
        });
    });

    it("case CREATE_REQUEST", () => {
        expect(reducer(state, { type: CREATE_REQUEST })).toEqual({
            ...state,
            createStatus: CREATE_REQUEST,
        });
    });

    it("case CREATE_SUCCESS", () => {
        expect(
            reducer(state, {
                type: CREATE_SUCCESS,
                payload: localWorkshops[0],
            })
        ).toEqual({
            ...state,
            createStatus: CREATE_SUCCESS,
            workshops: [...state.workshops, localWorkshops[0]],
        });
    });

    it("case CREATE_ERROR", () => {
        expect(reducer(state, { type: CREATE_ERROR })).toEqual({
            ...state,
            createStatus: CREATE_ERROR,
        });
    });

    it("case DELETE_SUCCESS", () => {
        expect(
            reducer(state, {
                type: DELETE_SUCCESS,
                payload: "81b0b3681cf6",
            })
        ).toEqual({
            ...state,
            workshops: state.workshops.filter((item) => item._id !== "81b0b3681cf6"),
        });
    });

    it("case OPEN_MODAL_WORKSHOP", () => {
        expect(
            reducer(state, {
                type: OPEN_MODAL_WORKSHOP,
                payload: "81b0b3681cf6",
            })
        ).toEqual({
            ...state,
            modalItem: state.workshops.find((workshop) => workshop._id === "81b0b3681cf6"),
            isModalOpen: true,
        });
    });

    it("case CLOSE_MODAL", () => {
        expect(
            reducer(state, {
                type: CLOSE_MODAL,
            })
        ).toEqual({
            ...state,
            modalItem: {},
            isModalOpen: false,
        });
    });

    it("should return initialState if unhandled action type", () => {
        expect(reducer(state, { type: "UNHANDLED" })).toEqual(initialState);
    });
});
