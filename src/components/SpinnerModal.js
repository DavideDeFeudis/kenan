import React from "react";
import '../styles/index.scss';
import loadingGif from '../images/load.gif'

export default function SpinnerModal({ loading }) {
    if (!loading) {
        return null;
    } else {
        return (
            <div className='spinner-modal'>
                <img src={loadingGif} width='45' height='45' alt="in progress..." />
            </div>
        );
    }
}
