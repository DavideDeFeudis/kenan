import React, { useState, useEffect } from 'react'
import Workshop from './Workshop'

export default function WorkshopsList() {
    const [data, setData] = useState({ workshops: [], isFetching: false })

    useEffect(() => {
        const fetchWorkshops = async () => {
            const baseUrl = process.env.REACT_APP_BACKEND_HOST
            try {
                setData({ workshops: data.workshops, isFetching: true })
                const req = await fetch(`${baseUrl}/workshops`, {
                    headers: { "Content-Type": "application/json" } // need?
                })
                const res = await req.json()
                console.log('res:', res)
                setData({ workshops: res, isFetching: false })
            } catch (e) {
                console.log(e)
                setData({ workshops: data.workshops, isFetching: false })
            }
        };
        fetchWorkshops();
    }, []);

    console.log('workshops:', data.workshops)

    if (data.workshops) {
        if (data.workshops.length === 0) {
            return (
                <p className='my-5'>There are no workshops at the moment</p>
            )
        }
        return (
            <div className="container text-center">
                {
                    data.workshops.map(workshop => {
                        return <Workshop
                            user
                            key={workshop._id}
                            workshop={workshop}
                        />
                    })
                }
            </div>
        )
    } else {
        return null
    }

}
