import React, { useState } from 'react'
import styled from "styled-components";
import { Button } from './Button'

export default function ContactForm(props) {
    const { route, subjectInput, textarea, buttonText, subjectText } = props

    const [message, setMessage] = useState({
        name: '',
        email: '',
        subject: subjectText,
        text: ''
    })

    const [feedback, setFeedback] = useState('')

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
        if (feedback) setFeedback('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendFormData()
        console.log(message)
    }

    const sendFormData = () => {
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
            .catch(err => {
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
                    {
                        subjectInput &&
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
                    }
                    {
                        textarea &&
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
                    }
                    <Button
                        type="submit"
                        className="mb-2"
                    >
                        {buttonText}
                    </Button>
                    <p>{feedback}</p>
                </form>
            </div>
        </FormContainer>
    )
}

const FormContainer = styled.div`
    margin-top: 5vh;
    // margin-bottom: 5vh;
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
