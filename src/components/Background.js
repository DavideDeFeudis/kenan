import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

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
        // blank div to avoid paragraph appearing on top before bg loads
        loading && (
          <div
            data-test="blank-loading-placeholder"
            style={{ height: "100vh" }}
          ></div>
        )
      }
      <img
        data-test="bg-image"
        onLoad={() => setLoading(false)}
        style={{
          width: "100vw",
        }}
        src={bg}
        alt="Contemporary dance"
      />
    </>
  );
}

Background.propTypes = {
  small: PropTypes.string,
  large: PropTypes.string.isRequired,
};
