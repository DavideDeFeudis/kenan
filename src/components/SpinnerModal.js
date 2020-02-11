import React from "react";
import '../styles/index.scss';
import loadingGif from '../images/load.gif'

export default function SpinnerModal({ loading }) {
    if (!loading) {
        return null;
    } else {
        return (
            <div className='modal-container'>
                <img src={loadingGif} width='35' height='35' alt="in progress..." />
            </div>
        );
    }
}
