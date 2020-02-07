import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from "../context";
import { Button } from './Button'

export default function Workshop(props) {
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
            .then(response => response.json())
            .catch(err => {
                // setLoading(false)
                // setFeedback('Error deleting ws. Try again later.')
                console.log(err)
            })
    }

    const handleDelete = () => {
        deleteData(_id, 'http://localhost:4000/admin/workshop')
        // reload
    }

    return (
        <div className='Workshop py-5'>
            <h3>{title}</h3>
            <p>{date}<br />{address}<br />{info}<br />{priceLabel1}{price1} {priceLabel2}{price2}<br />{priceLabel3}{price3} {priceLabel4}{price4}</p>
            {
                props.admin ?
                    <div>
                        <Link to="/admin">
                            <Button
                                type="button"
                                className="mt-4"
                                onClick={() => openModal(_id)}
                            >Edit</Button>
                        </Link>
                        <Link to="/admin">
                            <Button
                                type="button"
                                className="mt-4"
                                onClick={handleDelete}
                            // onClick={() => openModal(_id)}
                            >Delete</Button>
                        </Link>
                    </div> :
                    <Link to="/workshops">
                        <Button
                            type="button"
                            className="mt-4"
                            onClick={() => openModal(_id)}
                        >Sign up</Button>
                    </Link>
            }
        </div>
    )
}
