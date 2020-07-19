import React from "react";
import '../styles/index.scss';
import loadingGif from '../images/load.gif'

export default function Spinner({ loading, fullScreen }) {
    if (!loading) {
        return null;
    } else {
        return (
            <div className={fullScreen ? 'modal-container' : 'spinner-in-frame'}>
                <img src={loadingGif} width='45' height='45' alt="in progress..." />
            </div>
        );
    }
}
