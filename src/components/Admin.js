import React, { useState, useContext, useEffect } from 'react'
import '../styles/index.scss';
import { Context } from "../context";
import Navbar from './Navbar';
import Workshop from './Workshop';
import CreateForm from './CreateForm';
// import SpinnerModal from './SpinnerModal';
import { deleteWorkshop } from '../databaseService'
import uuidv1 from 'uuid/v1'
import app from "../base";
import { Button } from './Button'

export default function Admin() {
    const { workshops } = useContext(Context)
    // console.log('workshops:', workshops)

    let [tempWorkshops, setTempWorkshops] = useState([])
    // console.log('tempWorkshops:', tempWorkshops)

    useEffect(() => {
        // console.log('useEffect setTempWorkshops')
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

    const handleDelete = (secondaryID) => {
        const deletedWS = tempWorkshops.filter(item => item.secondaryID === secondaryID)
        console.log('deletedWS:', deletedWS)

        setTempWorkshops(tempWorkshops.filter(item => {
            return item.secondaryID !== secondaryID
        }))

        deleteWorkshop(secondaryID, `${process.env.REACT_APP_BACKEND_HOST}/admin/workshop`) // use env url
    }

    return (
        <div className="Admin">
            <Navbar />
            <div className="container main-content text-center">
                <section className='admin-headline'>
                    <h1>Admin area</h1>
                    <Button className='mt-4' onClick={() => app.auth().signOut()}>Sign out</Button>
                </section>
                <section className='create-area'>
                    <h2>Create workshop</h2>
                    <CreateForm
                        formData={newWorkshop}
                        setFormData={setNewWorkshop}
                        // loading={loading}
                        // setLoading={setLoading}
                        addWorkshopToTempWS={addWorkshopToTempWS}
                        secondaryID={uuidv1()}
                    />
                </section>
                <section className="preview">
                    <h2>Preview</h2>
                    <Workshop workshop={newWorkshop} />
                </section>
                <section className="published">
                    <h2>Published</h2>
                    {
                        tempWorkshops.map((workshop, i) => {
                            return <Workshop
                                admin
                                key={workshop.secondaryID}
                                workshop={workshop}
                                handleDelete={handleDelete}
                            />
                        })
                    }
                </section>
            </div>
            {/* <SpinnerModal loading={loading} /> */}
        </div>
    )
}
