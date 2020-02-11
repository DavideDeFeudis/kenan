import React, { useState, useContext, useEffect } from 'react'
import '../styles/index.scss';
import { Context } from "../context";
import Navbar from './Navbar';
import Workshop from './Workshop';
import CreateForm from './CreateForm';
// import SpinnerModal from './SpinnerModal';
import { deleteWorkshop } from '../databaseService'
import uuidv1 from 'uuid/v1'

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

        deleteWorkshop(secondaryID, 'http://localhost:4000/admin/workshop') // use env url
    }

    return (
        <div className="Admin">
            <Navbar />
            <div className="container main-content text-center">
                <h1 className='mt-5'>Create workshop</h1>
                <CreateForm
                    formData={newWorkshop}
                    setFormData={setNewWorkshop}
                    // loading={loading}
                    // setLoading={setLoading}
                    addWorkshopToTempWS={addWorkshopToTempWS}
                    secondaryID={uuidv1()}
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
                            key={workshop.secondaryID}
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
