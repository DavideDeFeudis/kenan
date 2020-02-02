import React, { useState } from 'react'
import styled from "styled-components";
import { Button } from './Button'
import loadingGif from '../images/load.gif'
require('dotenv').config()

export default function SignUpForm(props) {
    const { setFeedback, subjectContent } = props

    const [message, setMessage] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: subjectContent,
        text: ''
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        sendFormData()
        console.log(message)
    }

    const sendFormData = () => {
        fetch(`${process.env.BACKEND_HOST}/workshops`, {
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
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: '',
                    text: ''
                })
                // console.log(json)
            })
            .catch(err => {
                setLoading(false)
                setFeedback('Error signing up. Try again later.')
                console.log(err)
            })
    }

    return (
        <FormContainer className="container">
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
                {
                    loading ?
                        <div className='mt-4'>
                            <img src={loadingGif} width='25' height='25' alt="sending message..." />
                        </div> :
                        <Button type="submit" className="mb-2">Sign up</Button>
                }
            </form>
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
