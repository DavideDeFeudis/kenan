import React from "react";

export default function Input(props) {
    let { name, type, onChange, required, workshopDraft } = props;
    if (!type) type = "text";

    return (
        <input name={name} type={type} onChange={onChange} value={workshopDraft[name] || ""} required={required} autoComplete="off"></input>
    );
}
