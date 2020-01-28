import React, { useState } from 'react'
import styled from "styled-components";
import { ButtonContainer } from './Button'

export default function Form(props) {
    const { textareaText, subjectInput, textarea, buttonText, subjectText } = props

    const [message, setMessage] = useState({
        name: '',
        email: '',
        subject: subjectText,
        text: textareaText
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
        fetch('http://localhost:4000/contact', { // can i use /contact for workshops too?
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
                    <ButtonContainer
                        type="submit"
                        className="mb-2"
                    >
                        {buttonText}
                    </ButtonContainer>
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
