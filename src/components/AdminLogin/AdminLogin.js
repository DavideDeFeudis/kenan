import React, { useState } from "react";
import { Button } from "../Button";
import loadingGif from "../images/load.gif";
import Input from "../Input/Input";

export default function AdminLogin() {
    const initialState = {
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialState);
    const [feedback, setFeedback] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (feedback) setFeedback("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        sendFormData();
    };

    const sendFormData = () => {
        const baseUrl = process.env.REACT_APP_BACKEND_HOST;

        fetch(`${baseUrl}/admin/login`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("json:", json);
                setLoading(false);
                setFeedback(json.message);
                setFormData(initialState);
            })
            .catch((err) => {
                console.log("err:", err);
                setLoading(false);
                setFeedback("Error. Try again later.");
            });
    };

    return (
        <div className="form py-12">
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <Input name="email" type="email" onChange={handleChange} formData={formData} required />
                    <Input name="password" type="password" onChange={handleChange} formData={formData} required />
                    {loading ? (
                        <div>
                            <img src={loadingGif} width="25" height="25" alt="in progress..." />
                        </div>
                    ) : (
                        <div>
                            <Button type="submit">Login</Button>
                            <p className="my-4">{feedback}</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
