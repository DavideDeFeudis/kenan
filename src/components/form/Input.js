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
      value={workshopDraft[name] || ""} // || '' avoids Warning: `value` prop on `input` should not be null. Consider using an empty string to clear the component
      required={required}
      autoComplete="off"
    ></input>
  );
}
