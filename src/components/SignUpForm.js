import React, { useState } from 'react'
import styled from "styled-components";
import { ButtonContainer } from './Button'

export default function Form(props) {
    const { subjectContent } = props

    const [message, setMessage] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: subjectContent,
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
        fetch('http://localhost:4000/workshops', {
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
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: '',
                    text: ''
                })
                console.log(json)
            })
            .catch(err => {
                // Error signing up. Try again later.
                setFeedback('error fetching')
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
                            name="firstName"
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            onChange={handleChange}
                            value={message.firstName}
                            required
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <input
                            name="lastName"
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            onChange={handleChange}
                            value={message.lastName}
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
                        <textarea
                            name="text"
                            className="form-control"
                            rows="3"
                            placeholder="Anything else you want to tell us?"
                            onChange={handleChange}
                            value={message.text}
                        >
                        </textarea>
                    </div>
                    <ButtonContainer
                        type="submit"
                        className="mb-2"
                    >
                        Sign up
                    </ButtonContainer>
                    <p>{feedback}</p>
                </form>
            </div>
        </FormContainer>
    )
}

const FormContainer = styled.div`
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
