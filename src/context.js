import React, { Component } from 'react'
import { workshops } from "./data";

const Context = React.createContext();

class Provider extends Component {
    state = {
        workshops,
        isModalOpen: false,
        modalItem: workshops[0]
    }

    getItem = id => {
        return this.state.workshops.find(item => item.id === id);
    };

    openModal = id => {
        console.log('openModal')
        const item = this.getItem(id);
        this.setState(() => {
            console.log(this.state)
            return { modalItem: item, isModalOpen: true };
        });
    };

    closeModal = () => {
        console.log('closeModal')
        this.setState(() => {
            console.log(this.state)
            return { isModalOpen: false };
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

export { Provider, Consumer }
