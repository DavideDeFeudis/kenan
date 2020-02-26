import React, { useState, useContext, useEffect } from 'react'
import '../styles/index.scss';
import { Context } from "../context";
import Navbar from './Navbar';
import Workshop from './Workshop';
import CreateForm from './CreateForm';
import { deleteWorkshop } from '../databaseService'
import UpdateWorkshopModal from './UpdateWorkshopModal';

export default function Admin() {
    // EDIT WORKSHOPS
    const { workshops } = useContext(Context)
    let [tempWorkshops, setTempWorkshops] = useState([])
    useEffect(() => {
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
    const handleDelete = secondaryID => {
        setTempWorkshops(tempWorkshops.filter(item => {
            return item.secondaryID !== secondaryID
        }))

        deleteWorkshop(secondaryID, `${process.env.REACT_APP_BACKEND_HOST}/admin/workshop`)
    }

    return (
        <div className="Admin">
            <Navbar admin />
            {/* <div className="container main-content text-center">
                <section className="published">
                    <h2>Signed up customers</h2>
                    {
                        customers.map(customer => {
                            const { email, firstName, lastName, subject, text } = customer
                            return <p key={customer._id}>
                                {subject}<br />{text}<br />
                                {firstName} {lastName} - {email}<br /><br />
                            </p>
                        })
                    }
                </section>
            </div> */}
            <div className="container-fluid main-content text-center">
                <div className="row">
                    <div className="col-lg">
                        <section>
                            <h2>Create workshop</h2>
                            <CreateForm
                                newWorkshop={newWorkshop}
                                setNewWorkshop={setNewWorkshop}
                                addWorkshopToTempWS={addWorkshopToTempWS}
                            />
                        </section>
                        <section>
                            <h2>Preview</h2>
                            <Workshop preview workshop={newWorkshop} />
                        </section>
                    </div>
                    <div className="col-lg">
                        <section className="published">
                            <h2>Published</h2>
                            {
                                tempWorkshops.map(workshop => {
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
                </div>
            </div>
            <UpdateWorkshopModal
                newWorkshop={newWorkshop}
                setNewWorkshop={setNewWorkshop}
                addWorkshopToTempWS={addWorkshopToTempWS}
            />
        </div>
    )
}
