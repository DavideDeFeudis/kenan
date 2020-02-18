import React, {
    // useState, 
    useContext
} from 'react'
import { Link } from "react-router-dom";
import { Context } from "../context";
import { Button } from './Button'
// import loadingGif from '../images/load.gif'

export default function Workshop(props) {
    // const [feedback, setFeedback] = useState('')
    // const [loading, setLoading] = useState(false)

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
        price4
    } = props.workshop

    const userButtons = <Link to="/workshops">
        <Button
            type="button"
            className="mt-4"
            onClick={() => openModal(_id)}
        >Info</Button>
    </Link>

    const adminButtons = <div>
        <div>
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
        {/* <p className='my-3'>{feedback}</p> */}
    </div>

    let buttons = null // preview
    if (admin) {
        buttons = adminButtons
    } else if (user) {
        buttons = userButtons
    }

    return (
        <div className='Workshop py-5'>
            <h3>{title}</h3>
            <p>{date}<br />{address}<br />{info}</p>
            {
                preview || admin ?
                <p>{priceLabel1}{price1}<br />{priceLabel2}{price2}<br />
                    {priceLabel3}{price3}<br />{priceLabel4}{price4}<br />
                </p> : null
            }
            {buttons}
        </div>
    )
}
