import React, { useState, useContext } from 'react'
import '../styles/index.scss';
import { Context } from "../context";
import Navbar from './Navbar';
import Workshop from './Workshop';
import CreateForm from './CreateForm';

export default function Admin() {
    const { workshops } = useContext(Context)
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
    const [formData, setFormData] = useState(initialState)
    const [loading, setLoading] = useState(false)

    return (
        <div className="Admin">
            <Navbar />
            <div className="container main-content text-center">
                <h1>Create workshop</h1>
                <CreateForm formData={formData} setFormData={setFormData} loading={loading} setLoading={setLoading} />
                <section className="preview">
                    <h2>Preview</h2>
                    <Workshop preview workshop={formData} />
                </section>
                <h2>Published</h2>
                {
                    workshops.map(workshop => {
                        return <Workshop
                            admin
                            key={workshop._id}
                            workshop={workshop}
                        />
                    })
                }
            </div>
        </div>
    )
}
