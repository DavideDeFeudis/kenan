import React from 'react'
import { useState } from 'react';
import '../index.css';
import backgroundLarge from "../images/contact_1920.jpg";
// import backgroundSmall from "../images/contact_500.jpg";
import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';
import { ButtonContainer } from './Button'

export default function Contact() {

    const [message, setMessage] = useState({
        name: '',
        email: '',
        subject: '',
        text: ''
    })

    const [feedback, setFeedback] = useState('')

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
        // remove feedback when typing a second message
        if (feedback) setFeedback('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendFormData()
        console.log(message)
    }

    const sendFormData = () => {
        // http://efe377bc.ngrok.io/
        fetch('http://localhost:4000/contact', {
            method: "POST",
            body: JSON.stringify(message),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(json => {
                setFeedback(json.message)
                setMessage({
                    name: '',
                    email: '',
                    subject: '',
                    text: ''
                })
                console.log(json)
            })
    }

    return (
        <div className='Contact'>
            <Navbar />
            <Background
                // small={backgroundSmall}
                large={backgroundLarge}
            />
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
                    {/* <button type="submit" className="btn btn-secondary mb-2">Send</button> */}
                    <ButtonContainer
                        type="submit"
                        className="btn btn-secondary mb-2"
                    >
                        Send
                    </ButtonContainer>
                    <p>{feedback}</p>
                </form>
            </div>
            <Footer />
        </div>
    )
}
