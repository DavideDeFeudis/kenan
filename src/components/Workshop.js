import React from 'react'
import { ButtonContainer } from './Button'

export default function Workshop(props) {
    const { id, date, title, info, openModal } = props

    return (
        <div className='Workshop mt-5'>
            <h3 className='mt-5'>{date} | {title}</h3>
            <p>{info}</p>
            {/* <button type="submit" className="btn btn-secondary mt-4">Sign up</button> */}
            <ButtonContainer
                type="button"
                className="btn btn-secondary mt-4"
                onClick={() => openModal(id)}
            >
                Sign up
            </ButtonContainer>
        </div>
    )
}
