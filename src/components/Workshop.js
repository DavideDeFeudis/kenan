import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import { ButtonContainer } from './Button'

export default function Workshop(props) {
    const { openModal } = useContext(Consumer)
    const { id, date, title, time, address, target, price } = props

    return (
        <div className='Workshop mt-5'>
            <h3 className='mt-5'>{title}</h3>
            <p>{date} // {time}<br/>{address}<br/>{target}<br/>{price}</p>
            <Link to="/workshops">
                <ButtonContainer
                    type="button"
                    className="mt-4"
                    onClick={() => openModal(id)}
                >
                    Sign up
                </ButtonContainer>
            </Link>
        </div>
    )
}
