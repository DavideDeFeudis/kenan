import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Background.scss";

export default function Background({ small, large }) {
    const [loading, setLoading] = useState(true);

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
    });
    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                width: window.innerWidth,
            });
        }, 1000);
        window.addEventListener("resize", debouncedHandleResize);
        return (_) => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    });

    function debounce(fn, ms) {
        let timer;
        return (_) => {
            clearTimeout(timer);
            timer = setTimeout((_) => {
                timer = null;
                fn.apply(this, arguments);
            }, ms);
        };
    }

    let bg = dimensions.width < 574 ? small : large;

    return (
        <>
            {
                // Blank div to avoid paragraph appearing on top before bg image loads
                loading && <div data-test="image-placeholder" className="h-screen"></div>
            }
            <img data-test="bg-image" className="bg-image" onLoad={() => setLoading(false)} src={bg} alt="Contemporary dance" />
        </>
    );
}

Background.propTypes = {
    small: PropTypes.string,
    large: PropTypes.string.isRequired,
};
