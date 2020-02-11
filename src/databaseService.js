export const deleteWorkshop = (secondaryID, url) => {
    return fetch(url + '/' + secondaryID, {
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
    const baseUrl = process.env.REACT_APP_BACKEND_HOST

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
        })
        .catch(err => {
            console.log(err)
        })
}
