import React from 'react'

export default function Background(props) {
    const { small, large } = props

    return (
        <img
            src={large}
            srcSet={`${small} 1000w, ${large} 1920w`}
            alt='contemporary-dancers'
        />
    )
}
