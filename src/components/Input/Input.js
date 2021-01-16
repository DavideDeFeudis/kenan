import React from "react";

export default function Input(props) {
    let { name, type, onChange, required, workshopDraft } = props;
    if (!type) type = "text";

    return (
        <input
            className="form-control mb-4"
            name={name}
            type={type}
            onChange={onChange}
            value={workshopDraft[name] || ""}
            required={required}
            autoComplete="off"
        ></input>
    );
}
