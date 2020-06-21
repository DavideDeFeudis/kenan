import React, { useReducer, useEffect } from "react";
import { localVideos } from "./data";
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  GET_WORKSHOP,
  CREATE_WORKSHOP,
  DELETE_WORKSHOP,
  SET_NEW_WORKSHOP,
} from "./ActionTypes";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

// import { useHttp } from './hooks/http'
// const url = process.env.REACT_APP_BACKEND_HOST + '/workshops'
// const [loading, fetchedData] = useHttp(url, [])
// const loading = false;
// const fetchedData = localWorkshops;

const initialValue = {
  workshops: [],
  newWorkshop: {},
  videos: localVideos,
  loading: false,
  modalItem: {},
  isModalOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_NEW_WORKSHOP:
      console.log("SET_NEW_WORKSHOP:");
      return {
        ...state,
        newWorkshop: action.payload,
      };
    case GET_WORKSHOP:
      console.log("GET_WORKSHOP:");
      return {
        ...state,
        workshops: action.payload,
      };
    case CREATE_WORKSHOP:
      console.log("CREATE_WORKSHOP:");
      return {
        ...state,
        workshops: [...state.workshops, action.payload],
      };
    case DELETE_WORKSHOP:
      console.log("DELETE_WORKSHOP:");
      return {
        ...state,
        workshops: state.workshops.filter(
          (item) => item.secondaryID !== action.payload
        ),
      };
    case OPEN_MODAL:
      return {
        ...state,
        modalItem: state.workshops.find(
          (workshop) => workshop.secondaryID === action.payload
        ),
        isModalOpen: true,
      };
    case CLOSE_MODAL:
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
  // console.log('state:', state)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

// class Provider extends Component {
//   state = {
//     workshops: [],
//     customers: [],
//     videos: [],
//     loading: true,
//     isModalOpen: false,
//     modalItem: {},
//   };

//   componentDidMount() {
//     this.getLocalData();
//     this.getLocalVideos();
//     // this.getWorkshops()
//     // this.getCustomers()
//   }

//   getLocalVideos = async () => {
//     this.setState(
//       {
//         // workshops: localWorkshops,
//         // modalItem: localWorkshops[0],
//         videos: localVideos,
//         loading: false,
//       },
//       () => {
//         // console.log('getLocalData context state: ', this.state)
//       }
//     );
//   };

//   getLocalData = async () => {
//     this.setState(
//       {
//         workshops: localWorkshops,
//         // modalItem: localWorkshops[0],
//         // videos: localVideos,
//         loading: false,
//       },
//       () => {
//         // console.log('getLocalData context state: ', this.state)
//       }
//     );
//   };

//   getWorkshops = async () => {
//     const baseUrl = process.env.REACT_APP_BACKEND_HOST;
//     // console.log('context baseUrl:', baseUrl)
//     try {
//       const req = await fetch(`${baseUrl}/workshops`, {
//         headers: { "Content-Type": "application/json" }, // need?
//       });
//       const workshops = await req.json();
//       this.setState(
//         {
//           workshops,
//           loading: false,
//         },
//         () => {
//           // console.log('getWorkshops context state: ', this.state)
//         }
//       );
//     } catch (error) {
//       console.log("context: error fetching data", error);
//     }
//   };

//   // getCustomers = async () => {
//   //     const baseUrl = process.env.REACT_APP_BACKEND_HOST
//   //     // console.log('baseUrl:', baseUrl)

//   //     try {
//   //         const req = await fetch(`${baseUrl}/customers`, {
//   //             headers: { "Content-Type": "application/json" } // need?
//   //         })
//   //         const customers = await req.json()

//   //         this.setState({
//   //             customers,
//   //             loading: false
//   //         }, () => console.log('getCustomers context state: ', this.state))
//   //     }
//   //     catch (error) {
//   //         console.log("context: error fetching data", error)
//   //     }
//   // }

//   getItem = (id) => {
//     return this.state.workshops.find((item) => item.secondaryID === id);
//   };

//   openModal = (id) => {
//     const item = this.getItem(id);
//     this.setState(() => {
//       return { modalItem: item, isModalOpen: true };
//     });
//   };

//   closeModal = () => {
//     this.setState(() => {
//       return { isModalOpen: false, modalType: "" };
//     });
//   };

//   render() {
//     return (
//       <Context.Provider
//         value={{
//           ...this.state,
//           openModal: this.openModal,
//           closeModal: this.closeModal,
//         }}
//       >
//         {this.props.children}
//       </Context.Provider>
//     );
//   }
// }

// // const Consumer = Context.Consumer;
// // export { Context, Provider, Consumer };
