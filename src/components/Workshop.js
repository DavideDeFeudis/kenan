import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from "../context";
import { Button } from './Button'

export default function Workshop(props) {
    const { openModal } = useContext(Context)
    const {
        id,
        date,
        title,
        address,
        info
    } = props.workshop

    const {
        priceLabel1,
        priceLabel2,
        priceLabel3,
        priceLabel4,
        price1,
        price2,
        price3,
        price4
    } = props.workshop.price

    return (
        <div className='Workshop mt-5 pb-5'>
            <h3 className='mt-5'>{title}</h3>
            <p>{date}<br />{address}<br />{info}<br />{priceLabel1}{price1} {priceLabel2}{price2}<br />{priceLabel3}{price3} {priceLabel4}{price4}</p>
            {
                props.admin ?
                    <div>
                        <Link to="/admin">
                            <Button
                                type="button"
                                className="mt-4"
                                onClick={() => openModal(id)}
                            >Edit</Button>
                        </Link>
                        <Link to="/admin">
                            <Button
                                type="button"
                                className="mt-4"
                                onClick={() => openModal(id)}
                            >Delete</Button>
                        </Link>
                    </div> :
                    <Link to="/workshops">
                        <Button
                            type="button"
                            className="mt-4"
                            onClick={() => openModal(id)}
                        >Sign up</Button>
                    </Link>
            }
        </div>
    )
}
