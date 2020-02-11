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

    // set preview
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
        setNewWorkshop(initialState) // clear preview and inputs
    }

    const deleteData = (item, url) => {
        return fetch(url + '/' + item, {
            method: 'delete'
        })
            .then(response => {
                response.json()
                // setLoading(false)
                // if set to true, the browser will do a complete page refresh from the server and not from the cached version of the page
                window.location.reload(false);
            })
            .catch(err => {
                // setFeedback('Error deleting ws. Try again later.')
                console.log(err)
            })
    }

    const handleDelete = (_id) => {
        deleteData(_id, 'http://localhost:4000/admin/workshop')
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
                    <Workshop workshop={newWorkshop} />
                </section>
                <h2>Published</h2>
                {
                    tempWorkshops.map((workshop, i) => {
                        return <Workshop
                            admin
                            key={i}
                            workshop={workshop}
                            handleDelete={handleDelete}
                        />
                    })
                }
            </div>
            {/* <SpinnerModal loading={loading} /> */}
        </div>
    )
}
