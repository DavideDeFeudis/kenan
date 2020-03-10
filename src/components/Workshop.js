import React, {
    // useState, 
    useContext
} from 'react'
import { Link } from "react-router-dom";
import { Context } from "../context";
import { Button } from './Button'

export default function Workshop(props) {
    const { openModal } = useContext(Context)
    const { admin, preview, user, handleDelete, workshop, duplicate } = props
    // console.log('workshop:', workshop)
    const {
        secondaryID,
        _id,
        title,
        address,
        info,
        startDate,
        startTime,
        endDate,
        endTime,
        priceLabel1,
        priceLabel2,
        priceLabel3,
        priceLabel4,
        price1,
        price2,
        price3,
        price4,
        customers
    } = workshop
    // console.log('workshop _id:', title, workshop._id)
    // console.log('secondaryID:', title, secondaryID)
    // generate priceArea with truthy values
    const priceLabelArray = [
        priceLabel1,
        priceLabel2,
        priceLabel3,
        priceLabel4
    ]
    const priceArray = [
        price1,
        price2,
        price3,
        price4
    ]
    const truthyPriceLabelArray = priceLabelArray.filter(Boolean)
    const truthyPriceArray = priceArray.filter(Boolean)
    const priceArea = truthyPriceLabelArray.map((label, i) => {
        return <span key={i}>{label}{truthyPriceArray[i]}<br /></span>
    })
    const userButtons = (
        <Link to="/workshops">
            <Button
                type="button"
                className="mt-4"
                onClick={() => openModal(secondaryID)}
            >Info</Button>
        </Link>
    )
    const adminButtons = (
        <div className="my-4">
            <Link to="/admin">
                <Button
                    type="button"
                    className="admin-button"
                    onClick={() => duplicate(workshop)}
                >Duplicate</Button>
            </Link>
            <Link to="/admin">
                <Button
                    type="button"
                    className="admin-button"
                    onClick={() => handleDelete(secondaryID)}
                >Delete</Button>
            </Link>
        </div>
    )
    let buttons = null // for preview
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
            <p>
                {startDate}<br />
                {startTime}<br />
                {endDate}<br />
                {endTime}<br />
                {address}<br />
                {info}
            </p>
            {/* <p>{date}<br />{address}<br />{info}</p> */}
            {(preview || admin) && <div id='price-area'>{priceArea}</div>}
            {admin && customersList}
            {buttons}
        </div>
    )
}
