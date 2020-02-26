import React, { useState, useEffect } from 'react'
import Workshop from './Workshop'
import loadingGif from '../images/load.gif'
// import { Context } from "../context";
import { localWorkshops } from "../data"

export default function WorkshopsList() {
    // const { workshops } = useContext(Context)
    const [data, setData] = useState({ workshops: [], isFetching: false })

    useEffect(() => {
        const getLocalData = () => {
            setData({ workshops: localWorkshops, isFetching: false })
        }
        getLocalData()
        // const fetchWorkshops = async () => {
        //     const baseUrl = process.env.REACT_APP_BACKEND_HOST
        //     try {
        //         setData({ workshops: data.workshops, isFetching: true })
        //         const req = await fetch(`${baseUrl}/workshops`, {
        //             headers: { "Content-Type": "application/json" } // need?
        //         })
        //         const res = await req.json()
        //         setData({ workshops: res, isFetching: false })
        //     } catch (e) {
        //         console.log(e)
        //         setData({ workshops: data.workshops, isFetching: false })
        //     }
        // };
        // fetchWorkshops();
    }, []);

    if (data.isFetching || !data.workshops) { // || !data.workshops redundant?
        return (
            <div className="fetching-spinner container text-center">
                <img src={loadingGif} width='45' height='45' alt="in progress..." />
            </div>
        )
    } else {
        if (data.workshops.length === 0) {
            return (
                <div className="container text-center">
                    <p className='my-5'>There are no workshops at the moment</p>
                </div>
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
    }
}
