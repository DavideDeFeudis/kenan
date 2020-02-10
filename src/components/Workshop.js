import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from "../context";
import { Button } from './Button'
import loadingGif from '../images/load.gif'

export default function Workshop(props) {
    const [feedback, setFeedback] = useState('')
    const [loading, setLoading] = useState(false)

    const { openModal } = useContext(Context)
    const {
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

    const deleteData = (item, url) => {
        return fetch(url + '/' + item, {
            method: 'delete'
        })
            .then(response => {
                response.json()
                setLoading(false)
                // if set to true, the browser will do a complete page refresh from the server and not from the cached version of the page
                window.location.reload(false);
            })
            .catch(err => {
                setFeedback('Error deleting ws. Try again later.')
                console.log(err)
            })
    }

    const handleDelete = () => {
        setLoading(true)
        deleteData(_id, 'http://localhost:4000/admin/workshop')
    }

    const userButtons = <Link to="/workshops">
        <Button
            type="button"
            className="mt-4"
            onClick={() => openModal(_id)}
        >Sign up</Button>
    </Link>

    const adminButtons = loading ?
        <div>
            <img src={loadingGif} width='25' height='25' alt="in progress..." />
        </div> :
        <div>
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
                        onClick={handleDelete}
                    >Delete</Button>
                </Link>
            </div>
            <p className='my-3'>{feedback}</p>
        </div>

    const buttons = props.admin ? adminButtons : userButtons 

    return (
        <div className='Workshop py-5'>
            <h3>{title}</h3>
            <p>{date}<br />{address}<br />{info}<br />{priceLabel1}{price1} {priceLabel2}{price2}<br />{priceLabel3}{price3} {priceLabel4}{price4}</p>
            {props.preview ? null : buttons}
        </div>
    )
}
