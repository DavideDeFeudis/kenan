import React, { useState } from "react";
import { Button } from "../Button";
import Spinner from "../Spinner/Spinner";

/**
 * A contact form used to send messages.
 */
export default function ContactForm() {
    const initialState = {
        name: "",
        email: "",
        subject: "",
        text: "",
    };
    const [message, setMessage] = useState(initialState);

    const [feedback, setFeedback] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
        if (feedback) setFeedback("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        sendFormData();
    };

    const sendFormData = () => {
        fetch(`${process.env.REACT_APP_BACKEND_HOST}/contact`, {
            method: "POST",
            body: JSON.stringify(message),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setLoading(false);
                setFeedback(json.success ? "Your message has been successfully sent!" : "Error sending message. Try again later.");
                setMessage(initialState);
            })
            .catch((err) => {
                setLoading(false);
                setFeedback("Error sending message. Try again later.");
            });
    };

    return (
        <div className="form pt-12 pb-4">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input name="name" type="text" placeholder="Name" onChange={handleChange} value={message.name} required></input>
                    <input name="email" type="email" placeholder="Email" onChange={handleChange} value={message.email} required></input>
                    <input name="subject" type="text" placeholder="Subject" onChange={handleChange} value={message.subject}></input>
                    <textarea name="text" rows="3" placeholder="Message" onChange={handleChange} value={message.text} required></textarea>
                    <div>
                        <Button type="submit">Send</Button>
                        <p className="my-4">{feedback}</p>
                    </div>
                </form>
            </div>
            <Spinner loading={loading} fullScreen />
        </div>
    );
}
