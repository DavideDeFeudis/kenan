import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Consumer } from "../context";
import { ButtonContainer } from './Button'

export default function Workshop(props) {
    const { openModal } = useContext(Consumer)
    const { id, date, title, address, info } = props.workshop
    
    return (
        <div className='Workshop mt-5 pb-5'>
            <h3 className='mt-5'>{title}</h3>
            <p>{date}<br/>{address}<br/>{info}</p>
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
