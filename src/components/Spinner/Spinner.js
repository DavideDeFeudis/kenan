import React from "react";
import "../../styles/index.scss";
import "./Spinner.scss";
import loadingGif from "../../images/load.gif";
import PropTypes from "prop-types";

/**
 * A loading spinner capable of displaying inline or fullscreen on semi-transparent background.
 */
export default function Spinner({ loading, fullScreen }) {
    if (!loading) {
        return null;
    } else {
        return (
            <div data-test="spinner-wrapper" className={fullScreen ? "backdrop flex-center" : "spinner-in-frame"}>
                <img data-test="spinner-img" src={loadingGif} width="45" height="45" alt="in progress..." />
            </div>
        );
    }
}

Spinner.propTypes = {
    loading: PropTypes.bool,
    fullScreen: PropTypes.bool,
};
