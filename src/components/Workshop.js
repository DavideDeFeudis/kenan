import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import { ButtonContainer } from './Button'

export default function Workshop(props) {
    const { openModal } = useContext(Consumer)
    const { id, date, title, info } = props

    return (
        <div className='Workshop mt-5'>
            <h3 className='mt-5'>{date} | {title}</h3>
            <p>{info}</p>
            <Link to="/workshops">
                <ButtonContainer
                    type="button"
                    className="btn btn-secondary mt-4"
                    onClick={() => openModal(id)}
                >
                    Sign up
                </ButtonContainer>
            </Link>
        </div>
    )
}
