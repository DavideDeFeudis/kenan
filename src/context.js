import React, { Component } from 'react'
// import { workshops } from "./data";
require('dotenv').config()

const Context = React.createContext();

class Provider extends Component {
    state = {
        workshops: [],
        loading: true, // need?
        isModalOpen: false,
        modalItem: {}
        // modalItem: workshops[0]
    }

    componentDidMount() {
        console.log("context: componentDidMount")
        this.getData()
    }

    componentDidUpdate() {
        console.log("context: componentDidUpdate")
    }

    getData = async () => {
        console.log("context: getData")
        console.log('process.env', process.env)
        try {
            const req = await fetch(`${process.env.BACKEND_HOST}/admin`, {
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
        });
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
