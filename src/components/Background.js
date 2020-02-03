import React from 'react'

export default function Background(props) {
    const { small, large } = props

    return (
        <img
            style={{width: '100vw'}}
            src={large}
            srcSet={`${small} 1000w, ${large} 1920w`}
            alt='Contemporary dancers'
        />
    )
}
