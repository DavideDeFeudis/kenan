import React, { useState, useContext } from 'react'
import '../styles/index.scss';
import { Context } from "../context";
import Navbar from './Navbar';
import Workshop from './Workshop';
import CreateForm from './CreateForm';

export default function Admin() {
    const { workshops } = useContext(Context)

    const [previewData, setPreviewData] = useState({})

    const passPreviewData = (data) => {
        setPreviewData(data)
    }

    return (
        <div className="Admin">
            <Navbar />
            <div className="pt-5 container main-content text-center">
                <CreateForm passPreviewData={passPreviewData} />
                <h1>Preview</h1>
                <Workshop workshop={previewData} />
                <h1>Published</h1>
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
