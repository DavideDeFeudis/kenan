import React from "react";
import '../styles/index.scss';
import loadingGif from '../images/load.gif'

export default function SpinnerModal({ loading, fullScreen }) {
    if (!loading) {
        return null;
    } else {
        return (
            <div className={fullScreen ? 'modal-container' : 'spinner-modal-in-frame'}>
                <img src={loadingGif} width='45' height='45' alt="in progress..." />
            </div>
        );
    }
}
