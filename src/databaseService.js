export const deleteWorkshop = (secondaryID) => {
    return fetch(`${process.env.REACT_APP_BACKEND_HOST}/admin/workshop/` + secondaryID, {
        method: 'delete'
    })
        .then(response => {
            response.json()
        })
        .catch(err => {
            console.log(err)
        })
}

export const createWorkshop = (formData) => {
    fetch(`${process.env.REACT_APP_BACKEND_HOST}/admin/workshop`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log('json:', json)
        })
        .catch(err => {
            console.log(err)
        })
}
