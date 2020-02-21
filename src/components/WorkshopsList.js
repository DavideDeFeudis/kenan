import React, { useState, useEffect } from 'react'
import Workshop from './Workshop'
import loadingGif from '../images/load.gif'

export default function WorkshopsList() {
    // const [data, setData] = useState({ workshops: [], isFetching: false })

    // useEffect(() => {
    //     const fetchWorkshops = async () => {
    //         const baseUrl = process.env.REACT_APP_BACKEND_HOST
    //         try {
    //             setData({ workshops: data.workshops, isFetching: true })
    //             const req = await fetch(`${baseUrl}/workshops`, {
    //                 headers: { "Content-Type": "application/json" } // need?
    //             })
    //             const res = await req.json()
    //             setData({ workshops: res, isFetching: false })
    //         } catch (e) {
    //             console.log(e)
    //             setData({ workshops: data.workshops, isFetching: false })
    //         }
    //     };
    //     fetchWorkshops();
    // }, []);

    // if (data.isFetching || !data.workshops) { // || !data.workshops redundant?
    //     return (
    //         <div className="fetching-spinner container text-center">
    //             <img src={loadingGif} width='45' height='45' alt="in progress..." />
    //         </div>
    //     )
    // } else {
    //     if (data.workshops.length === 0) {
    //         return (
    //             <div className="container text-center">
    //                 <p className='my-5'>There are no workshops at the moment</p>
    //             </div>
    //         )
    //     }


    const workshops = [
        {
            _id: 1,
            title: 'Flow Acrobatics Dresden',
            date: '18-19.04.2020',
            address: 'Bautzner Straße 107',
            info: 'For all levels',
            priceLabel1: 'One day: €',
            priceLabel2: 'Both days: €',
            price1: 60,
            price2: 95
        },
        {
            _id: 2,
            title: 'Flow Acrobatics Hamburg',
            date: '18-19.04.2020',
            address: 'Valentinskamp 34A',
            info: 'For all levels',
            priceLabel1: 'One day: €',
            priceLabel2: 'Both days: €',
            price1: 60,
            price2: 95
        },
        {
            _id: 3,
            title: 'Flow Acrobatics Brussels',
            date: '25-26.04.2020',
            address: 'Menenstraat 29, 1080 Sint-Jans-Molenbeek',
            info: 'For all levels',
            priceLabel1: 'One day: €',
            priceLabel2: 'Both days: €',
            price1: 60,
            price2: 95
        }
    ]

        return (
            <div className="container text-center">
                {
                    // data.workshops.map(workshop => {
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
    // }
}
