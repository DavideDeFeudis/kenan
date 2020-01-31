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
