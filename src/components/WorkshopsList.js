import React, { useContext } from 'react'
import { Context } from "../context";
import Workshop from './Workshop';

export default function WorkshopsList() {
    const { workshops } = useContext(Context)

    if (workshops.length === 0) {
        return (
            <p className='my-5'>There are no workshops at the moment</p>
        )
    }
    return (
        <div className="container text-center">
            {
                workshops.map(workshop => {
                    return <Workshop
                    user
                    key={workshop._id}
                    workshop={workshop}
                    />
                })
            }
        </div>
    )
}
