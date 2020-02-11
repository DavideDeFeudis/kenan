import React, { useState, useContext, useEffect } from 'react'
import '../styles/index.scss';
import { Context } from "../context";
import Navbar from './Navbar';
import Workshop from './Workshop';
import CreateForm from './CreateForm';
// import SpinnerModal from './SpinnerModal';

export default function Admin() {
    const { workshops } = useContext(Context)
    console.log('workshops:', workshops)

    const [tempWorkshops, setTempWorkshops] = useState([])
    console.log('tempWorkshops:', tempWorkshops)

    useEffect(() => {
        console.log('useEffect setTempWorkshops')
        setTempWorkshops([...workshops])
    }, [workshops])

    const initialState = {
        title: '',
        date: '',
        address: '',
        info: '',
        priceLabel1: '',
        priceLabel2: '',
        priceLabel3: '',
        priceLabel4: '',
        price1: '',
        price2: '',
        price3: '',
        price4: ''
    }
    const [newWorkshop, setNewWorkshop] = useState(initialState)

    const addWorkshopToTempWS = () => {
        setTempWorkshops([...tempWorkshops, newWorkshop])
    }

    return (
        <div className="Admin">
            {console.log('render')}
            <Navbar />
            <div className="container main-content text-center">
                <h1>Create workshop</h1>
                <CreateForm
                    formData={newWorkshop}
                    setFormData={setNewWorkshop}
                    // loading={loading}
                    // setLoading={setLoading}
                    addWorkshopToTempWS={addWorkshopToTempWS}
                />
                <section className="preview">
                    <h2>Preview</h2>
                    <Workshop preview workshop={newWorkshop} />
                </section>
                <h2>Published</h2>
                {
                    tempWorkshops.map((workshop, i) => {
                        return <Workshop
                            admin
                            key={i}
                            workshop={workshop}
                        />
                    })
                }
            </div>
            {/* <SpinnerModal loading={loading} /> */}
        </div>
    )
}
