import React, {
    // useState, 
    useContext
} from 'react'
import { Link } from "react-router-dom";
import { Context } from "../context";
import { Button } from './Button'

export default function Workshop(props) {
    const { openModal } = useContext(Context)
    const { admin, preview, user, handleDelete } = props
    const {
        secondaryID,
        _id,
        date,
        title,
        address,
        info,
        priceLabel1,
        priceLabel2,
        priceLabel3,
        priceLabel4,
        price1,
        price2,
        price3,
        price4,
        customers
    } = props.workshop

    const userButtons = <Link to="/workshops">
        <Button
            type="button"
            className="mt-4"
            onClick={() => openModal(_id)}
        >Info</Button>
    </Link>

    const adminButtons = <div>
        {/* <Link to="/admin">
                    <Button
                        type="button"
                        className="mt-4"
                        onClick={() => openModal(_id)}
                    >Edit</Button>
                </Link> */}
        <Link to="/admin">
            <Button
                type="button"
                className="mt-4"
                onClick={() => handleDelete(secondaryID)}
            >Delete</Button>
        </Link>
    </div>

    let buttons = null // no buttons in preview
    if (admin) {
        buttons = adminButtons
    } else if (user) {
        buttons = userButtons
    }

    let customersList = null
    if (customers && customers.length) { // customers is undefined on first render
        customersList = <div className='mt-3'>
            <p>Attendees:</p>
            {
                customers.map(customer => {
                    return <p key={customer._id}>{customer.firstName} {customer.lastName} - {customer.email}</p>
                })
            }
        </div>
    } else {
        customersList = <p className='mt-3'>No one signed up yet</p>
    }

    return (
        <div className='Workshop py-5'>
            <h3>{title}</h3>
            <p>{date}<br />{address}<br />{info}</p>
            {
                (preview || admin) &&
                    <div>
                        <p>
                            {priceLabel1}{price1}<br />{priceLabel2}{price2}<br />
                            {/* {priceLabel3}{price3}<br />{priceLabel4}{price4}<br /> */}
                        </p>
                    </div>
            }
            {/* {
                admin && customersList
            } */}
            {buttons}
        </div>
    )
}
