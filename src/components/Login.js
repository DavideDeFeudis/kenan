import React, { useState } from 'react'
import styled from "styled-components";
import { Button } from './Button'
// require('dotenv').config()

export default function Login() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [feedback, setFeedback] = useState('')

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        if (feedback) setFeedback('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendFormData()
        console.log('formData:', formData)
    }

    const sendFormData = () => {
        fetch(`${process.env.REACT_APP_BACKEND_HOST}/login`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(json => {
                setFeedback(json.message)
                setFormData({
                    name: '',
                    email: '',
                    password: ''
                })
                console.log('json:', json)
            })
            .catch(err => {
                setFeedback('Error sending form data to the server.')
                console.log('err:', err)
            })
    }

    return (
        <FormContainer>
            <div className="container">
                <h1>Login to the admin area</h1>
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
                            value={formData.name}
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
                            value={formData.email}
                            required
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={handleChange}
                            value={formData.password}
                            required
                        >
                        </input>
                    </div>
                    <Button
                        type="submit"
                        className="mb-2"
                    >
                        Login
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
