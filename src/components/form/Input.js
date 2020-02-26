import React from 'react'

export default function Input(props) {
    let { name, type, placeholder, onChange, required, newWorkshop } = props
    if (!type) type = "text"
    if (!placeholder) placeholder = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <input
            className="form-control"
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={newWorkshop[name]}
            required={required}
            autoComplete='off'
        >
        </input>
    )
}
