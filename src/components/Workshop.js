import React from 'react'
import { ButtonContainer } from './Button'

export default function Workshop(props) {
    const { date, title, description } = props

    return (
        <div className='Workshop mt-5'>
            <h3 className='mt-5'>{date} - {title}</h3>
            <p>{description}</p>
            {/* <button type="submit" className="btn btn-secondary mt-4">Sign up</button> */}
            <ButtonContainer
                type="submit"
                className="btn btn-secondary mt-4"
            >
                Sign up
            </ButtonContainer>
        </div>
    )
}
