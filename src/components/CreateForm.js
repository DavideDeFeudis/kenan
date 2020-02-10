import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import loadingGif from '../images/load.gif'
import Input from './form/Input'

export default function CreateForm(props) {
    // useEffect to update preview after state update? otherwise one step too late
    useEffect(() => {
        props.passPreviewData(formData)
    })

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

    const inputNamesCol1 = ['title', 'date']
    const inputNamesCol2 = ['address', 'info']
    const inputNamesCol3 = ['priceLabel1', 'priceLabel2', 'priceLabel3', 'priceLabel4']
    const inputNamesCol4 = ['price1', 'price2', 'price3', 'price4']

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
        <>
            <form className="form pt-3" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-sm-6">
                        {
                            inputNamesCol1.map((inputName, i) => (
                                <Input
                                    key={i}
                                    name={inputName}
                                    onChange={handleChange}
                                    formData={formData}
                                />
                            ))
                        }
                    </div>
                    <div className="col-sm-6">
                        {
                            inputNamesCol2.map((inputName, i) => (
                                <Input
                                    key={i}
                                    name={inputName}
                                    onChange={handleChange}
                                    formData={formData}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-sm-6">
                        {
                            inputNamesCol3.map((inputName, i) => (
                                <Input
                                    key={i}
                                    name={inputName}
                                    onChange={handleChange}
                                    formData={formData}
                                />
                            ))
                        }
                    </div>
                    <div className="col-sm-6">
                        {
                            inputNamesCol4.map((inputName, i) => (
                                <Input
                                    key={i}
                                    name={inputName}
                                    type="number"
                                    onChange={handleChange}
                                    formData={formData}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="my-4">
                    {
                        loading ?
                            <div>
                                <img src={loadingGif} width='25' height='25' alt="in progress..." />
                            </div> :
                            <div>
                                <Button type="submit">Publish</Button>
                                <p className='my-3'>{feedback}</p>
                            </div>
                    }
                </div>
            </form>
        </>
    )
}
