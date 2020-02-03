import React, { useContext } from 'react'
import '../index.css';
import { Context } from "../context";
// import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Workshop from './Workshop';
import { Button } from './Button'
import AdminModal from './AdminModal';

export default function Admin() {
    const { workshops, openModal } = useContext(Context)

    return (
        <div className="Admin">
            <Navbar />
            <div className="pt-5 container main-content text-center">
                <Button
                    type="button"
                    className="mt-4"
                    onClick={() => openModal()}
                >Create workshop</Button>
                {
                    workshops.map(workshop => {
                        return <Workshop
                            admin
                            key={workshop.id}
                            workshop={workshop}
                        />
                    })
                }
            </div>
            <AdminModal />
        </div>
    )
}
