import React, { useState } from 'react'
import styled from "styled-components";
import { Button } from './Button'
import loadingGif from '../images/load.gif'

export default function ContactForm() {
    const [message, setMessage] = useState({
        name: '',
        email: '',
        subject: '',
        text: ''
    })

    const [feedback, setFeedback] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
        if (feedback) setFeedback('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        sendFormData()
        // console.log(message)
    }

    const sendFormData = () => {
        fetch(`${process.env.REACT_APP_BACKEND_HOST}/contact`, {
            method: "POST",
            body: JSON.stringify(message),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(json => {
                setLoading(false)
                setFeedback(json.message)
                setMessage({
                    name: '',
                    email: '',
                    subject: '',
                    text: ''
                })
                // console.log(json)
            })
            .catch(err => {
                setLoading(false)
                setFeedback('Error sending message. Try again later.')
                console.log(err)
            })
    }

    return (
        <FormContainer>
            <div className="container">
                <form
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
                            required
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
                    {
                        loading ?
                            <div className='mt-4'>
                                <img src={loadingGif} width='25' height='25' alt="sending message..." />
                            </div> :
                            <div>
                                <Button type="submit" className="my-4">Send</Button>
                                <p>{feedback}</p>
                            </div>
                    }
                </form>
            </div>
        </FormContainer>
    )
}

const FormContainer = styled.div`
    height: 45vh;
    margin-top: 5vh;
    text-align: center; 
    textarea, 
    textarea:focus, 
    input, 
    input:focus {
        background-color: rgb(21, 21, 21);
        border-color: rgb(55, 55, 55);
        color: #FFF;
    }
`;

// background input turns white when using autofill
