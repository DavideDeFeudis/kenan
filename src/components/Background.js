import React, { useState, useEffect } from 'react'

export default function Background(props) {
    const { small, large } = props
    const [loading, setLoading] = useState(true)

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth
    });
    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                width: window.innerWidth
            });
        }, 1000);
        window.addEventListener("resize", debouncedHandleResize);
        return _ => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    });

    function debounce(fn, ms) {
        let timer;
        return _ => {
            clearTimeout(timer);
            timer = setTimeout(_ => {
                timer = null;
                fn.apply(this, arguments);
            }, ms);
        };
    }

    let bg = dimensions.width < 574 ? small : large

    return (
        <>
            { // empty div to avoid paragraph appearing on top before bg loads
                loading && <div style={{ height: '100vh' }}></div>
            }
            <img
                onLoad={() => setLoading(false)}
                style={{
                    width: '100vw',
                }}
                src={bg}
                alt='Contemporary dance'
            />
        </>
    )
}
