import React from 'react'
import { useState } from 'react';
import '../index.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Contact() {

    const [message, setMessage] = useState({
        name: '',
        email: '',
        subject: '',
        text: ''
    })

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
    }

    const sendFormData = () => {
        // http://efe377bc.ngrok.io/
        fetch('http://localhost:4000/contact', { method: "POST", body: JSON.stringify(message), headers: { "Content-Type": "application/json" } })
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
                            required
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <input
                            name="subject"
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            onChange={handleChange}
                            value={message.subject}
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <textarea
                            name="text"
                            className="form-control"
                            rows="3"
                            placeholder="Message"
                            onChange={handleChange}
                            value={message.text}
                            required
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
