import React from 'react'
import { useState } from 'react';
import '../index.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Contact() {

    const [message, setMessage] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
    }

    // const handleChange = (e) => {
    //     setMessage(prev => ({
    //         ...prev,
    //         [e.target.name]: e.target.value
    //     }), () => {
    //         console.log(message)
    //     })  
    // }

    // const [message, setMessage] = useState('')

    // const handleChange = (e) => {
    //     // console.log('e:', e)
    //     setMessage(e.target.value)
    // }

    const sendFormData = () => {
        // http://efe377bc.ngrok.io/
        fetch('http://localhost:3001/contact', { method: "POST", body: JSON.stringify(message), headers: { "Content-Type": "application/json" } })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendFormData()
        console.log(message)
    }


    return (
        <div className='Contact'>
            <Navbar />
            <div className="container">
                <form
                    action=""
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            onChange={handleChange}
                            value={message.name}
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={handleChange}
                            value={message.email}
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            className="form-control"
                            rows="3"
                            placeholder="Message"
                            onChange={handleChange}
                            value={message.message}
                        >
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary mb-2">Send</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
