import React, { useState } from 'react'

export default function Background(props) {
    const { small, large } = props

    const [loading, setLoading] = useState(true)
    const [imgStyle, setImgStyle] = useState({
        width: '100vw',
        display: 'none'
    })

    const handleLoad = () => {
        setImgStyle({
            ...imgStyle,
            display: 'inline'
        })
        setLoading(false)
    }

    return (
        <>
            {
                loading && <div style={{ height: '100vw' }}></div>
            }
            <img
                onLoad={handleLoad}
                style={imgStyle}
                src={large}
                srcSet={`${small} 480w, ${large} 1920w`}
                alt='Contemporary dancers'
            />
        </>

    )
}
