import React, { useState } from 'react'
import { Button } from './Button'
import loadingGif from '../images/load.gif'
import Input from './form/Input'

export default function CreateForm() {
    const initialState = {
        title: '',
        date: '',
        address: '',
        info: '',
        priceLabel1: '',
        priceLabel2: '',
        priceLabel3: '',
        priceLabel4: '',
        price1: '',
        price2: '',
        price3: '',
        price4: ''
    }
    const [formData, setFormData] = useState(initialState)
    const [feedback, setFeedback] = useState('')
    const [loading, setLoading] = useState(false)

    const textInputNames = ['title', 'date', 'address', 'info', 'priceLabel1', 'priceLabel2', 'priceLabel3', 'priceLabel4']
    const numberInputNames = ['price1', 'price2', 'price3', 'price4']

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        if (feedback) setFeedback('')
    }

    const handleSubmit = (e) => {
        // e.preventDefault()
        setLoading(true)
        sendFormData()
    }

    const sendFormData = () => {
        // const baseUrl = process.env.REACT_APP_BACKEND_HOST 
        const baseUrl = 'http://localhost:4000'

        fetch(`${baseUrl}/admin/workshop`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log('json:', json)
                setLoading(false)
                setFeedback(json.message)
                setFormData(initialState)
            })
            .catch(err => {
                setLoading(false)
                setFeedback('Error. Try again later.')
                console.log(err)
            })
    }

    return (
        <div className='form py-5'>
            <div className="container">
                <form
                    onSubmit={handleSubmit}
                >
                    {
                        textInputNames.map((inputName, i) => (
                            <Input
                                key={i}
                                name={inputName}
                                onChange={handleChange}
                                formData={formData}
                            // required
                            />
                        ))
                    }
                    {
                        numberInputNames.map((inputName, i) => (
                            <Input
                                key={i}
                                name={inputName}
                                type="number"
                                onChange={handleChange}
                                formData={formData}
                            // required
                            />
                        ))
                    }
                    {
                        loading ?
                            <div>
                                <img src={loadingGif} width='25' height='25' alt="creating..." />
                            </div> :
                            <div>
                                <Button type="submit">Create</Button>
                                <p className='my-3'>{feedback}</p>
                            </div>
                    }
                </form>
            </div>
        </div>
    )
}
