import React, { useState } from 'react'

export default function Background(props) {
    const { small, large } = props
    const [loading, setLoading] = useState(true)

    return (
        <>
            { // empty div to avoid paragraph appearing on top before bg loads
                loading && <div style={{ height: '100vw' }}></div>
            }
            <img
                onLoad={() => setLoading(false)}
                style={{
                    width: '100vw',
                    display: loading ? 'none' : 'inline'
                }}
                src={large}
                srcSet={`${small} 480w, ${large} 1920w`}
                alt='Contemporary dance'
            />
        </>

    )
}
