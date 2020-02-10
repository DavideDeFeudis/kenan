import React, { useContext } from 'react'
import '../styles/index.scss';
import { Context } from "../context";
// import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Workshop from './Workshop';
// import { Button } from './Button'
import CreateForm from './CreateForm';

export default function Admin() {
    const { workshops } = useContext(Context)
    console.log('workshops:', workshops)

    return (
        <div className="Admin">
            <Navbar />
            <div className="pt-5 container main-content text-center">
                <CreateForm />
                {/* ws preview */}
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
