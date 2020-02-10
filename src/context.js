import React, { Component } from 'react'
import { localWorkshops, localVideos } from "./data"

const Context = React.createContext()

class Provider extends Component {
    state = {
        workshops: [],
        videos: [],
        loading: true, // need?
        isModalOpen: false,
        modalItem: {}
    }

    componentDidMount() {
        // this.getLocalData()
        this.getData()
    }

    getLocalData = async () => {
        this.setState({
            workshops: localWorkshops,
            // modalItem: localWorkshops[0],
            videos: localVideos,
            loading: false
        }, () => console.log('context state: ', this.state))
    }

    getData = async () => {
        // const baseUrl = process.env.REACT_APP_BACKEND_HOST 
        const baseUrl = 'http://localhost:4000'

        try {
            const req = await fetch(`${baseUrl}/workshops`, {
                headers: { "Content-Type": "application/json" } // need?
            })
            const workshops = await req.json()

            this.setState({
                workshops,
                loading: false
            }, () => console.log('context state: ', this.state))
        }
        catch (error) {
            console.log("context: error fetching data", error)
            // this.setState({
            //     error: true,
            //     message: "error"
            // }, () => console.log(this.state))
        }
    }

    getItem = id => {
        return this.state.workshops.find(item => item._id === id);
    };

    openModal = id => {
        const item = this.getItem(id);
        this.setState(() => {
            return { modalItem: item, isModalOpen: true };
        }, console.log(this.state));
    };

    closeModal = () => {
        this.setState(() => {
            return { isModalOpen: false, modalType: '' };
        });
    };

    render() {
        return (
            <Context.Provider value={{
                ...this.state,
                openModal: this.openModal,
                closeModal: this.closeModal
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer
export { Context, Provider, Consumer }
