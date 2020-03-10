import React from 'react'
import { Button } from './Button'
import Input from './form/Input'
import { createWorkshop } from '../databaseService'

export default function CreateForm(props) {
    const { newWorkshop, setNewWorkshop, addWorkshopToTempWS, clearInputs } = props
    // console.log('CreateForm props:', props)
    const inputNamesCol1 = ['title']
    // const inputNamesCol1 = ['title', 'date']
    const inputNamesCol2 = ['address', 'info']
    const inputNamesCol3 = ['priceLabel1', 'priceLabel2', 'priceLabel3', 'priceLabel4']
    const inputNamesCol4 = ['price1', 'price2', 'price3', 'price4']

    const handleChange = (e) => {
        setNewWorkshop({
            ...newWorkshop,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addWorkshopToTempWS()
        createWorkshop(newWorkshop)
    }

    return (
        <form className="form create-form pt-3" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col-sm-6">
                    <label htmlFor="start-date">Starting date</label>
                    <Input
                        id='start-date'
                        type='date'
                        name='startDate'
                        onChange={handleChange}
                        newWorkshop={newWorkshop}
                    />
                    <label htmlFor="start-time">Starting time</label>
                    <Input
                        id='start-time'
                        type='time'
                        name='startTime'
                        onChange={handleChange}
                        newWorkshop={newWorkshop}
                    />
                    {
                        inputNamesCol1.map((inputName, i) => (
                            <Input
                                key={i}
                                name={inputName}
                                onChange={handleChange}
                                newWorkshop={newWorkshop}
                            />
                        ))
                    }
                </div>
                <div className="col-sm-6">
                    <label htmlFor="end-date">Ending date</label>
                    <Input
                        id='end-date'
                        type='date'
                        name='endDate'
                        onChange={handleChange}
                        newWorkshop={newWorkshop}
                    />
                    <label htmlFor="end-time">Ending time</label>
                    <Input
                        id='end-time'
                        type='time'
                        name='endTime'
                        onChange={handleChange}
                        newWorkshop={newWorkshop}
                    />
                    {
                        inputNamesCol2.map((inputName, i) => (
                            <Input
                                key={i}
                                name={inputName}
                                onChange={handleChange}
                                newWorkshop={newWorkshop}
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
                                newWorkshop={newWorkshop}
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
                                newWorkshop={newWorkshop}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="my-4">
                <Button className='admin-button' type="submit">Publish</Button>
                <Button onClick={clearInputs} className='admin-button' type="button">Clear Inputs</Button>
            </div>
        </form>
    )
}
