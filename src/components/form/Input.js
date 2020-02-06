import React from 'react'

export default function Input(props) {
    let { name, type, placeholder, onChange, required, formData} = props
    if (!type) type = "text"
    if (!placeholder) placeholder = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <div className="form-group">
            <input
                className="form-control"
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={formData[name]}
                required={required}
                autoComplete='off'
            >
            </input>
        </div>
    )
}
