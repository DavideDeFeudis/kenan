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
        this.getLocalVideos()
        this.getData()
    }

    getLocalVideos = async () => {
        this.setState({
            // workshops: localWorkshops,
            // modalItem: localWorkshops[0],
            videos: localVideos,
            loading: false
        }, () => console.log('getLocalData context state: ', this.state))
    }

    getLocalData = async () => {
        this.setState({
            workshops: localWorkshops,
            // modalItem: localWorkshops[0],
            // videos: localVideos,
            loading: false
        }, () => console.log('getLocalData context state: ', this.state))
    }

    getData = async () => {
        const baseUrl = process.env.REACT_APP_BACKEND_HOST 
        // console.log('baseUrl:', baseUrl)

        try {
            const req = await fetch(`${baseUrl}/workshops`, {
                headers: { "Content-Type": "application/json" } // need?
            })
            const workshops = await req.json()

            this.setState({
                workshops,
                loading: false
            }, () => console.log('getData context state: ', this.state))
        }
        catch (error) {
            console.log("context: error fetching data", error)
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
